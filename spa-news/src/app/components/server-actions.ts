'use server'

import { ApiService } from "@/service/API/ApiService";
import { ArticleInCatalog, RequestParams } from "../types";

export async function fetchNews(params: RequestParams) {
  const {keyword, limit, sort, page} = params;
  const apiService = new ApiService();
  const newsArr: ArticleInCatalog[] = await apiService.getNews(limit, sort, page, keyword);
  return newsArr;
}

export async function fetchNextPageNews(params: RequestParams) {
  params.page += 1;
  const {keyword, limit, sort, page} = params;
  const apiService = new ApiService();
  const newsArr: ArticleInCatalog[] = await apiService.getNews(limit, sort, page, keyword);
  return newsArr;
}

export async function autoFetchMoreNews(params: RequestParams, oldNews: ArticleInCatalog[]) {
  params.page += 1;
  const nextPageNews = await fetchNextPageNews(params);
  const news = [...oldNews, ...nextPageNews];
  return news;
}
