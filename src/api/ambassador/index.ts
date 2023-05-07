import axios from 'axios';
import Project from 'constants/project';
import {
  TSingleAmbassador,
  TRegisterAsAmbassadorParams,
} from 'api/ambassador/types';

const AmbassadorAPI = {
  registration: async (body: TRegisterAsAmbassadorParams) => {
    const { data } = await axios.post(
      `${Project.apis.v1}/ambassador/registration`,
      body
    );
    return data;
  },

  getAmbassadors: async () => {
    const { data } = await axios.get(`${Project.apis.v1}/ambassador`);

    return data;
  },

  getSingleAmbassador: async (id: TSingleAmbassador) => {
    const { data } = await axios.get(`${Project.apis.v1}/ambassador/${id}`);

    return data;
  },

  deleteAmbassador: async (id: TSingleAmbassador) => {
    const { data } = await axios.delete(`${Project.apis.v1}/ambassador/${id}`);

    return data;
  },
};

export default AmbassadorAPI;
