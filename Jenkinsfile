pipeline {

    agent any

    options {
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }

    environment {
        PROJECT = "intranet-portal"
        EMAIL_DEVELOPERS = "${EMAIL_DEVELOPERS}"

        SONAR_TOOL = tool "${SONAR_TOOL}"
        SONAR_SERVER = "${SONAR_SERVER}"

        AWS_DEFAULT_REGION = "${AWS_REGION}"
    }

    triggers {
        GenericTrigger(
            genericVariables: [
                [key: 'ref', value: '$.ref']
            ],
            causeString: 'Triggered on $ref',
            token: "intranet-portal-home",
            printContributedVariables: true,
            printPostContent: true,
            regexpFilterText: '$ref',
            regexpFilterExpression: 'refs/heads/' + BRANCH_NAME
        )
    }

    stages {
        stage("Initialize") {
            steps {
                script {
                    if (env.BRANCH_NAME == "master") {
                        env.AWS_BUCKET_S3 = "s3://pdn-${PROJECT}"
                        env.AWS_CREDENTIALS_ID = "${AWS_CREDENTIALS_PDN}"
                        env.AWS_CDN_DISTRIBUTION = "${AWS_CDN_DISTRIBUTION_INTRANET_PDN}"
                        
                        env.ENVIRONMENT = "PDN";
                    } else if (env.BRANCH_NAME == "staging") {
                        env.AWS_BUCKET_S3 = "s3://stg-${PROJECT}"
                        env.AWS_CREDENTIALS_ID = "${AWS_CREDENTIALS_DEV}"
                        env.AWS_CDN_DISTRIBUTION = "${AWS_CDN_DISTRIBUTION_INTRANET_STG}"

                        env.ENVIRONMENT = "STG";
                    } else if (env.BRANCH_NAME == "develop") {
                        env.AWS_BUCKET_S3 = "s3://dev-${PROJECT}"
                        env.AWS_CREDENTIALS_ID = "${AWS_CREDENTIALS_DEV}"
                        env.AWS_CDN_DISTRIBUTION = "${AWS_CDN_DISTRIBUTION_INTRANET_DEV}"

                        env.ENVIRONMENT = "DEV";
                    }
                }
            }
        }
        stage("checkout") {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: scm.branches,
                    doGenerateSubmoduleConfigurations: scm.doGenerateSubmoduleConfigurations,
                    extensions: scm.extensions + [[$class: 'SubmoduleOption', parentCredentials: true, reference: '', recursiveSubmodules: true]],
                    submoduleCfg: [],
                    userRemoteConfigs: scm.userRemoteConfigs
                ])
            }
        }
        stage("SonarQube Analysis") {
            steps {
                echo "[EXEC] - Analisis estatico de codigo"
                script {
                    withSonarQubeEnv("${SONAR_SERVER}") {
                        sh "${SONAR_TOOL}/bin/sonar-scanner -Dsonar.projectKey=${PROJECT}-home -Dsonar.projectName=${PROJECT}"
                    }
                }
            }
        }
        stage("npm install") {
            steps {
                sh "npm install"
            }
        }
        stage("S3 CO") {
            environment {
                GATSBY_ACTIVE_ENV = "co"
            }
            steps {
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: "${AWS_CREDENTIALS_ID}", accessKeyVariable: 'AWS_ACCESS_KEY_ID', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
                    sh "gatsby clean"
                    sh "gatsby build"
                    sh "aws s3 sync ./public/ ${AWS_BUCKET_S3}-home --delete"
                    sh "aws cloudfront create-invalidation --distribution-id ${AWS_CDN_DISTRIBUTION} --paths '/*'"
                }
            }
        }
    }

    post {
        // always {
        //     deleteDir()
        // }
        failure {
            office365ConnectorSend color: '#96CEB4', message: "Despligue de: ${PROJECT} en ${BRANCH_NAME}", status: "All was derrumbed", webhookUrl: "${TEAMS_WEBHOOK}"
            // slackSend channel: 'kraken', message: "Hey krakens! This deploy failed: ${PROJECT} in ${BRANCH_NAME}"
            mail to: "${EMAIL_DEVELOPERS}",
                subject: "[Familia][DevOps] Failed ${PROJECT} in ${BRANCH_NAME}",
                body: "Error en el proyecto ${env.BUILD_URL}"
        }
    }
}