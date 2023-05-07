import axios from 'axios';
import Project from 'constants/project';
import { TAddBenefit, TSingleBenefit } from 'api/benefits/types';

const BenefitsAPI = {
  getBenefits: async () => {
    const { data } = await axios.get(`${Project.apis.v1}/benefits`);
    return data;
  },

  addBenefit: async (body: TAddBenefit) => {
    await axios.post(`${Project.apis.v1}/benefits`);
  },

  getSingleBenefit: async (id: TSingleBenefit) => {
    const { data } = await axios.post(`${Project.apis.v1}/benefits/${id}`);

    return data;
  },

  updateBenefit: async (id: TSingleBenefit, body: TAddBenefit) => {
    await axios.patch(`${Project.apis.v1}/benefits/${id}`, body);
  },

  deleteBenefit: async (id: TSingleBenefit) => {
    await axios.delete(`${Project.apis.v1}/benefits/${id}`);
  },

  getSuggestions: async () => {
    const { data } = await axios.get(`${Project.apis.v1}/suggestions`);
    return data;
  },

  addSuggestion: async (body: TAddBenefit) => {
    await axios.post(`${Project.apis.v1}/suggestions`);
  },

  getSingleSuggestion: async (id: TSingleBenefit) => {
    const { data } = await axios.post(`${Project.apis.v1}/suggestions/${id}`);

    return data;
  },

  updateSuggestion: async (id: TSingleBenefit, body: TAddBenefit) => {
    await axios.patch(`${Project.apis.v1}/suggestions/${id}`, body);
  },

  deleteSuggestion: async (id: TSingleBenefit) => {
    await axios.delete(`${Project.apis.v1}/suggestions/${id}`);
  },

  upvoteSuggestion: async (id: TSingleBenefit) => {
    await axios.post(`${Project.apis.v1}/suggestions/${id}/upvote`);
  },

  downvoteSuggestion: async (id: TSingleBenefit) => {
    await axios.post(`${Project.apis.v1}/suggestions/${id}/downvote`);
  },
};

export default BenefitsAPI;
