'use server';

import { ApiService } from '@/service/API/ApiService';
import { ArticleInCatalog, RequestParams } from '../types';

export async function fetchNews(params: RequestParams) {
  const apiService = new ApiService();
  const newsArr: ArticleInCatalog[] = await apiService.getNews(params);
  return newsArr;
}

export async function fetchNewsBatch(params: RequestParams) {
  const apiService = new ApiService();
  const newsArr: ArticleInCatalog[] = await apiService.getNews(params);
  return newsArr;
}
