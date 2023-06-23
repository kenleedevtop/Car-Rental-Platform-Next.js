import Project from 'constants/project';
import { client } from 'api/api-client';

const GraphsAPI = {
  getGraphs: async (id: any) => {
    const { data } = await client.get(
      `${Project.apis.v1}/insight/clients/clientProductsOverTimedata/${id}`,
      {
        params: {
          useStrictPeriod: false,
          numberOfPoints: 30,
          graphType: 'cumulative',
          statusAtPointOfTime: true,
          includeOngoingPeriod: true,
          status: 0,
          product: 0,
        },
      }
    );

    return data;
  },
};

export default GraphsAPI;
