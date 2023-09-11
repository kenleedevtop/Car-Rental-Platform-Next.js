const Project = {
  name: 'Supercar Stake',
  version: '1.0.0',
  app: {
    // environment: 'production',
    // environment: 'staging',
    environment: 'development',

    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    // baseProdUrl: 'https://app.supercarstake.com',
    // baseStageUrl: 'https://app.staging.supercarstake.com',
  },
  apis: {
    // Production
    // v1: 'https://api.supercarstake.com',
    // Staging
    // v1: 'https://api.staging.supercarstake.com',
    // Local/Dev
    v1: process.env.NEXT_PUBLIC_API,
  },
  websocketApi: {
    // Production
    // v1: 'https://api.supercarstake.com',
    // Staging
    // v1: 'https://api.staging.supercarstake.com',
    // Local/Dev
    v1: process.env.NEXT_PUBLIC_WEBSOCKET,
  },
  title: {
    prefix: '',
    sufix: ' | Supercar Stake',
  },
};

export default Project;
