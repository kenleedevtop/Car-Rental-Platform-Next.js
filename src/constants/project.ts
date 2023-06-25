const Project = {
  name: 'Patients Influence',
  version: '1.0.0',
  app: {
    environment: 'development',
    baseUrl: 'http://localhost',
    baseProdUrl: 'https://patientsinfluence.com',
  },
  apis: {
    v1: 'https://api.patientsinfluence.com',
    // v1: 'http://localhost:3000',
  },
  title: {
    prefix: '',
    sufix: ' | Patients Influence',
  },
};

export default Project;
