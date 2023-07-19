const Project = {
  name: 'Patients Influence',
  version: '1.0.0',
  app: {
    environment: 'production',
    // environment: 'development',

    baseUrl: 'http://localhost',
    baseProdUrl: 'https://app.staging.patientsinfluence.com',
  },
  apis: {
    v1: 'https://api.staging.patientsinfluence.com',
    // v1: 'http://localhost:3000',
  },
  title: {
    prefix: '',
    sufix: ' | Patients Influence',
  },
};

export default Project;
