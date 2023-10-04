import { ArticleInCatalog, ArticleResponse, NewsResponse, RequestParams } from '@/app/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { API_KEY } = process.env;

export const guardianApi = createApi({
  reducerPath: 'news/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://content.guardianapis.com/',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getNews: build.query<ArticleInCatalog[], RequestParams>({
      query: (params: RequestParams) => ({
        url: 'search',
        params: {
          q: params.keyword,
          ['order-by']: params.sort,
          ['page-size']: params.limit,
          page: params.page,
          ['api-key']: 'b0706de8-b3da-4a9b-ac07-af4a3fec399a',
          ['show-fields']: 'all',
        },
      }),
      transformResponse: (resp: {response: NewsResponse<ArticleInCatalog>}) => resp.response.results
    }),
  }),
});

export const { useGetNewsQuery } = guardianApi;
