import { ApiService } from "@/service/API/ApiService"
import { ArticleInCatalog } from "../types";
import { CreateArticleCard } from "./CreateArticleCard";

export async function NewsCatalog () {
  const apiService = new ApiService();
  const newsArr: ArticleInCatalog[] = await apiService.getNews();
  const newsCards = newsArr.map((article) => <CreateArticleCard key={article.id} article={article} />)

  return (
    <div className="flex flex-wrap gap-3 justify-center">{newsCards}</div>
  )
}