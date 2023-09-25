import { ApiService } from "@/service/API/ApiService";
import { NewsCatalog } from "./components/NewsCatalog";
import { ArticleInCatalog, RequestParams, Sort } from "./types";

export const params: RequestParams = {
  limit: 10,
  sort: Sort.Newest,
  page: 1,
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
