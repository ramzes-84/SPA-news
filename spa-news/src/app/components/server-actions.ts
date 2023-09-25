'use server';

import { ApiService } from '@/service/API/ApiService';
import { ArticleInCatalog, RequestParams } from '../types';
import { params } from '../page';

export async function fetchNews() {
  const apiService = new ApiService();
  const newsArr: ArticleInCatalog[] = await apiService.getNews();
  return newsArr;
}

export async function fetchNextPageNews() {
  params.page += 1;
  const apiService = new ApiService();
  const newsArr: ArticleInCatalog[] = await apiService.getNews();
  return newsArr;
}
