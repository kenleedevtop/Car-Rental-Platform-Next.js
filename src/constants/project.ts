const Project = {
  name: 'Shared Supercars',
  version: '1.0.0',
  app: {
    // environment: 'production',
    // environment: 'staging',
    environment: 'development',

    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    // baseProdUrl: 'https://app.brotherhoodhouse.com',
    // baseStageUrl: 'https://app.staging.brotherhoodhouse.com',
  },
  apis: {
    // Production
    // v1: 'https://api.brotherhoodhouse.com',
    // Staging
    // v1: 'https://api.staging.brotherhoodhouse.com',
    // Local/Dev
    v1: process.env.NEXT_PUBLIC_API,
  },
  websocketApi: {
    // Production
    // v1: 'https://api.brotherhoodhouse.com',
    // Staging
    // v1: 'https://api.staging.brotherhoodhouse.com',
    // Local/Dev
    v1: process.env.NEXT_PUBLIC_WEBSOCKET,
  },
  title: {
    prefix: '',
    sufix: ' | Shared Supercars',
  },
};

export default Project;
