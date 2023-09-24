import { CreateArticleCard } from "@/app/components/CreateArticleCard";
import { ArticleInCatalog } from "@/app/types";
import { ApiService } from "@/service/API/ApiService";

export default async function Page({ params }: { params: { key: string } }) {
  const apiService = new ApiService();
  const newsArr: ArticleInCatalog[] = await apiService.getNewsBySearch(params.key);
  const newsCards = newsArr.map((article) => <CreateArticleCard key={article.id} article={article} />);

  return (
    <div className="flex flex-wrap gap-3 justify-center">{newsCards}</div>
  )
}
