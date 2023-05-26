import Project from 'constants/project';
import {
  TCreateCompany,
  TCreateCompanyTitle,
  TSingleCompany,
  TSingleCompanyTitle,
} from 'api/company/types';

import { client } from 'api/api-client';

const CompanyAPI = {
  create: async (body: any) => {
    const { data } = await client.post(`${Project.apis.v1}/companies`, body);

    return data;
  },

  getAll: async () => {
    const { data } = await client.get(`${Project.apis.v1}/companies`);

    return data;
  },

  createTitle: async (body: TCreateCompanyTitle) => {
    const { data } = await client.post(
      `${Project.apis.v1}/companies/title`,
      body
    );

    return data;
  },

  getAllTitles: async () => {
    const { data } = await client.get(
      `${Project.apis.v1}/companies/title?limit=20`
    );

    return data;
  },

  getOneCompany: async (id: TSingleCompany) => {
    const { data } = await client.get(`${Project.apis.v1}/companies/${id}`);

    return data;
  },

  getOneCompanyTitle: async (id: TSingleCompanyTitle) => {
    const { data } = await client.get(
      `${Project.apis.v1}/companies/title/${id}`
    );

    return data;
  },
};

export default CompanyAPI;
