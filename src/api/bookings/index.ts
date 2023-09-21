// eslint-disable-next-line import/no-named-as-default
import Project from 'constants/project';
import {
  TCreateAsBookingParams,
} from 'api/bookings/types';

import { client } from 'api/api-client';

const BookingAPI = {
  Booking: async (body: TCreateAsBookingParams) => {
    const { data } = await client.post(`${Project.apis.v1}/bookings`, body);

    return data;
  },

  getBookings: async (filters: any) => {
    const { data } = await client.get(`${Project.apis.v1}/bookings`, {
      params: {
        ...filters,
      },
    });

    return data;
  },

  getMyBookings: async () => {
    const { data } = await client.get(`${Project.apis.v1}/bookings/my-bookings`);
    return data;
  },

};

export default BookingAPI;
