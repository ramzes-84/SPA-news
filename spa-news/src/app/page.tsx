import { ApiService } from "@/service/API/ApiService";
import { NewsCatalog } from "./components/NewsCatalog";
import { ArticleInCatalog } from "./types";

export default async function Home() {
  const apiService = new ApiService();
  const newsArr: ArticleInCatalog[] = await apiService.getNews();

  return (
    <>
      <NewsCatalog newsArr={newsArr} />
    </>
  )
}
