import { client } from 'api/api-client';
import Project from 'constants/project';

const NotificationAPI = {
  getNotificationsForMe: async (search?: string) => {
    const { data } = await client.get(`${Project.apis.v1}/notifications/me`, {
      params: {
        search,
      },
    });

    return data;
  },

  getAll: async (search?: string, startDate?: string, endDate?: string) => {
    const { data } = await client.get(`${Project.apis.v1}/notifications`, {
      params: {
        search,
        startDate,
        endDate,
      },
    });

    return data;
  },

  getOneNotification: async (id: any) => {
    const { data } = await client.get(`${Project.apis.v1}/notifications/${id}`);

    return data;
  },
};

export default NotificationAPI;
