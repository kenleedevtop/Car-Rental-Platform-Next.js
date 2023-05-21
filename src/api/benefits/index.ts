import Project from 'constants/project';
import {
  TAddBenefit,
  TSingleBenefit,
  TAddSuggestion,
} from 'api/benefits/types';
import { client } from 'api/api-client';

const BenefitsAPI = {
  getBenefits: async (filter: any = {}) => {
    const { data } = await client.get(`${Project.apis.v1}/benefits`, {
      params: filter,
    });
    return data;
  },

  getBenefitsCategories: async () => {
    const { data } = await client.get(`${Project.apis.v1}/benefits/categories`);

    return data;
  },

  getBenefitsPartnerships: async () => {
    const { data } = await client.get(
      `${Project.apis.v1}/benefits/partnerships`
    );

    return data;
  },

  addBenefit: async (body: TAddBenefit) => {
    await client.post(`${Project.apis.v1}/benefits`, body);
  },

  getSingleBenefit: async (id: TSingleBenefit) => {
    const { data } = await client.post(`${Project.apis.v1}/benefits/${id}`);

    return data;
  },

  updateBenefit: async (id: TSingleBenefit, body: TAddBenefit) => {
    await client.patch(`${Project.apis.v1}/benefits/${id}`, body);
  },

  deleteBenefit: async (id: TSingleBenefit) => {
    await client.delete(`${Project.apis.v1}/benefits/${id}`);
  },

  getSuggestions: async (filter: any = {}) => {
    const { data } = await client.get(
      `${Project.apis.v1}/benefits/suggestions`,
      {
        params: filter,
      }
    );

    return data;
  },

  addSuggestion: async (body: TAddSuggestion) => {
    await client.post(`${Project.apis.v1}/benefits/suggestions`, body);
  },

  getSingleSuggestion: async (id: TSingleBenefit) => {
    const { data } = await client.get(
      `${Project.apis.v1}/benefits/suggestions/${id}`
    );

    return data;
  },

  updateSuggestion: async (id: TSingleBenefit, body: TAddBenefit) => {
    await client.patch(`${Project.apis.v1}/benefits/suggestions/${id}`, body);
  },

  deleteSuggestion: async (id: TSingleBenefit) => {
    await client.delete(`${Project.apis.v1}/benefits/suggestions/${id}`);
  },

  upvoteSuggestion: async (id: TSingleBenefit) => {
    await client.post(`${Project.apis.v1}/benefits/suggestions/${id}/upvote`);
  },

  downvoteSuggestion: async (id: TSingleBenefit) => {
    await client.post(`${Project.apis.v1}/benefits/suggestions/${id}/downvote`);
  },
};

export default BenefitsAPI;
