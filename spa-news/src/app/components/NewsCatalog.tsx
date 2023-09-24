'use client'

import { useState } from "react";
import { ArticleInCatalog } from "../types";
import { CreateArticleCard } from "./CreateArticleCard";
import { Search } from "./Search";

export function NewsCatalog ({ newsArr }: { newsArr: ArticleInCatalog[] }) {
  const [news, setNews] = useState(newsArr);
  const newsCards = news.map((article) => <CreateArticleCard key={article.id} article={article} />)

  return (
    <>
      <Search callback={setNews} />
      <div className="flex flex-wrap gap-3 justify-center">{newsCards.length > 0 ? newsCards : 'Nothing was found'}</div>
    </>
  )
}