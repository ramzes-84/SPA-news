import { ApiService } from "@/service/API/ApiService";
import { NewsCatalog } from "./components/NewsCatalog";
import { ArticleInCatalog, RequestParams, Sort } from "./types";

export const params: RequestParams = {
  limit: 10,
  sort: Sort.newest,
  page: 1,
  keyword: '',
}

export default async function Home() {
  const apiService = new ApiService();
  const newsArr: ArticleInCatalog[] = await apiService.getNews();

  return (
    <>
      <NewsCatalog newsArr={newsArr} reqestParams={params} />
    </>
  )
}
