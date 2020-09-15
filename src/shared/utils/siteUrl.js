export default
    process.env.ENVIRONMENT === 'PDN' ?
        process.env.SITE_PDN + '/'
        :
        process.env.ENVIRONMENT === 'STG' ?
            process.env.SITE_STG + '/'
            :
            process.env.SITE_DEV + '/'
