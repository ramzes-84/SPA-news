'use server';

import { ApiService } from '@/service/API/ApiService';
import { ArticleInCatalog, RequestParams } from '../types';

export async function fetchNews(config: RequestParams) {
  const apiService = new ApiService();
  const newsArr: ArticleInCatalog[] = await apiService.getNews(config);
  return newsArr;
}
