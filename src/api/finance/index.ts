// eslint-disable-next-line import/no-named-as-default
import Project from 'constants/project';
import {
  TConfirmTokenTransaction,
  TCreateCheckoutSession,
} from 'api/finance/types';

import { client } from 'api/api-client';

const FinaceAPI = {
  createCheckoutSession: async (body: TCreateCheckoutSession) => {
    const { data } = await client.post(
      `${Project.apis.v1}/finance/create-checkout-session`,
      body
    );

    return data;
  },

  getAllTokenTransaction: async (search?: string) => {
    const { data } = await client.get(
      `${Project.apis.v1}/finance/token-transactions`,
      {
        params: {
          search,
        },
      }
    );

    return data;
  },

  getConfig: async (quantity: string) => {
    const { data } = await client.get(`${Project.apis.v1}/finance/config`, {
      params: {
        quantity,
      },
    });

    return data;
  },

  confirmTokenTransaction: async (body: TConfirmTokenTransaction) => {
    const { data } = await client.post(
      `${Project.apis.v1}/users/confirm-transaction`,
      body
    );

    return data;
  },

  getOneTransaction: async (id: any) => {
    const { data } = await client.get(
      `${Project.apis.v1}/finance/token-transactions/${id}`
    );

    return data;
  },
};

export default FinaceAPI;
