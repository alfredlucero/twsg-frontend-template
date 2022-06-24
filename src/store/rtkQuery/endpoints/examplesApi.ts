import { api } from '../apiSlice';
import { Endpoints } from '../Endpoints';
import { gql } from 'graphql-request';

export interface Example {
  id: number;
  message: string;
}

interface ExamplesResponse {
  getExamples: Example[];
}

export const examplesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    [Endpoints.getExamples]: builder.query<Example[], void>({
      query: () => ({
        body: gql`
          query GetExamples {
            getExamples {
              id
              message
            }
          }
        `,
      }),
      transformResponse: (response: ExamplesResponse) => {
        return response.getExamples;
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetExamplesQuery } = examplesApi;
