'use server'

import { ApiService } from "@/service/API/ApiService";
import { ArticleInCatalog } from "../types";

export async function fetchNews() {
  const apiService = new ApiService();
  const newsArr: ArticleInCatalog[] = await apiService.getNews();
  return newsArr;
}

export async function fetchNewsByKey(key: string) {
  const apiService = new ApiService();
  const newsArr: ArticleInCatalog[] = await apiService.getNewsBySearch(key);
  return newsArr;
}