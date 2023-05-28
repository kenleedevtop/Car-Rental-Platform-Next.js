import Project from 'constants/project';
import {
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

  getAll: async (search: string) => {
    const { data } = await client.get(`${Project.apis.v1}/companies`, {
      params: {
        search,
        limit: 10,
      },
    });

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
