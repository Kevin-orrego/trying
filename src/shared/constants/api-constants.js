let url = process.env.ENVIRONMENT === 'STG' ? 'https://l60xo7vpwj.execute-api.us-east-1.amazonaws.com/stg/nol' :
    process.env.ENVIRONMENT === 'PDN' ? 'https://2blh4fqkq6.execute-api.us-east-1.amazonaws.com/pdn/nol' :
        'https://u79iu4uev0.execute-api.us-east-1.amazonaws.com/dev/nol';

export const CLIENT_ID = process.env.ENVIRONMENT !== 'PDN' ? '10prlbiado4ieqmmv31nedlbc' : '4l2ebk4ltfhfu0dnhais1l2qhs';
export const REFRESH_TOKEN = process.env.ENVIRONMENT !== 'PDN' ? 'https://nol-dev.auth.us-east-1.amazoncognito.com/oauth2/token' : 'https://nol-pdn.auth.us-east-1.amazoncognito.com/oauth2/token';

export const MockConst = 'https://api.myjson.com/bins/18rx45';