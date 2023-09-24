'use server'

import { ApiService } from "@/service/API/ApiService";
import { ArticleInCatalog, sort } from "../types";

export async function fetchNews(formJSON: {
  [k: string]: FormDataEntryValue;
}) {
  const keyword = formJSON.keyword as string;
  const limit = +formJSON.limit;
  const order: sort = formJSON.sort as string;
  const apiService = new ApiService();
  const newsArr: ArticleInCatalog[] = await apiService.getNews(limit, order, keyword);
  return newsArr;
}
