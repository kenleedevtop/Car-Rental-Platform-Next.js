import axios from 'axios';
import Project from 'constants/project';
import { TSingleClient, TRegisterAsClientParams } from 'api/client/types';

const ClientAPI = {
  registration: async (body: TRegisterAsClientParams) => {
    const { data } = await axios.post(
      `${Project.apis.v1}/client/registration`,
      body
    );
    return data;
  },

  getClients: async () => {
    const { data } = await axios.get(`${Project.apis.v1}/client`);

    return data;
  },

  getSingleClient: async (id: TSingleClient) => {
    const { data } = await axios.get(`${Project.apis.v1}/client/${id}`);

    return data;
  },

  deleteClient: async (id: TSingleClient) => {
    const { data } = await axios.delete(`${Project.apis.v1}/client/${id}`);

    return data;
  },
};

export default ClientAPI;
