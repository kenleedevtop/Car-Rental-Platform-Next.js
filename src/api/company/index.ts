import axios from 'axios';
import Project from 'constants/project';
import {
  TCreateCompany,
  TCreateCompanyTitle,
  TSingleCompany,
  TSingleCompanyTitle,
} from 'api/company/types';

const CompanyAPI = {
  create: async (body: TCreateCompany) => {
    const { data } = await axios.post(`${Project.apis.v1}/company`, body);

    return data;
  },

  getAll: async () => {
    const { data } = await axios.get(`${Project.apis.v1}/company?limit=500`);

    return data;
  },

  createTitle: async (body: TCreateCompanyTitle) => {
    const { data } = await axios.post(`${Project.apis.v1}/company/title`, body);

    return data;
  },

  getAllTitles: async () => {
    const { data } = await axios.get(
      `${Project.apis.v1}/company/title?limit=500`
    );

    return data;
  },

  getOneCompany: async (id: TSingleCompany) => {
    const { data } = await axios.get(`${Project.apis.v1}/company/${id}`);

    return data;
  },

  getOneCompanyTitle: async (id: TSingleCompanyTitle) => {
    const { data } = await axios.get(`${Project.apis.v1}/company/title/${id}`);

    return data;
  },
};

export default CompanyAPI;
