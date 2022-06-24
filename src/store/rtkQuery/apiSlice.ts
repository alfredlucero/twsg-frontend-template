import { createApi } from '@reduxjs/toolkit/query/react';
import { request, ClientError } from 'graphql-request';
import { apiRoutes } from '../apiRoutes';

const graphqlBaseQuery =
  () =>
  async ({ body, variables }: { body: string; variables?: any }) => {
    const baseUrl = `${window.appConfig.apiHost}${apiRoutes.graphql}`;
    const headers = {
      // In real implementation you will pull this out from localStorage/cookies
      Authorization: `Bearer auth_token`,
    };
    try {
      const result = await request(baseUrl, body, variables, headers);
      return { data: result };
    } catch (error) {
      if (error instanceof ClientError) {
        return { error: { status: error.response.status, data: error } };
      }
      return { error: { status: 500, data: error } };
    }
  };

const reducerPath = 'rtkQuerySlice';

export const api = createApi({
  reducerPath,
  baseQuery: graphqlBaseQuery(),
  endpoints: () => ({}),
});
