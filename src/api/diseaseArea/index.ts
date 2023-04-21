import axios from 'axios';
import Project from 'constants/project';
import { TCreateDiseaseArea, TSingleDiseaseArea } from 'api/diseaseArea/types';

const DiseaseAreaAPI = {
  create: async (body: TCreateDiseaseArea) => {
    const { data } = await axios.post(`${Project.apis.v1}/disease-area`, body);

    return data;
  },

  getAll: async () => {
    const { data } = await axios.get(`${Project.apis.v1}/disease-area`);

    return data;
  },

  getOne: async (id: TSingleDiseaseArea) => {
    const { data } = await axios.get(`${Project.apis.v1}/disease-area/${id}`);

    return data;
  },
};

export default DiseaseAreaAPI;
