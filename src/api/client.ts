import Project from 'constants/project';
import PatientsInfluenceClient from 'utilities/api-client';

const client = new PatientsInfluenceClient({
  baseUrl: Project.apis.v1,
  withCredentials: true,
});

export default client;
