const Project = {
  name: 'Patients Influence',
  version: '1.0.0',
  app: {
    // environment: 'production',
    // environment: 'development',
    environment: 'staging',

    baseUrl: 'http://localhost',
    baseProdUrl: 'https://app.patientsinfluence.com',
    baseStageUrl: 'https://app.staging.patientsinfluence.com',
  },
  apis: {
    // Production
    // v1: 'https://api.patientsinfluence.com',
    // Staging
    v1: 'https://api.staging.patientsinfluence.com',
    // Local/Dev
    // v1: 'http://localhost:3000',
  },
  title: {
    prefix: '',
    sufix: ' | Patients Influence',
  },
};

export default Project;
