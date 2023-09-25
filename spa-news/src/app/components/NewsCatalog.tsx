'use client'

import { useState } from "react";
import { ArticleInCatalog, RequestParams } from "../types";
import { CreateArticleCard } from "./CreateArticleCard";
import { Search } from "./Search";
import { fetchNews } from "./server-actions";

export function NewsCatalog ({ newsArr, reqestParams }: { newsArr: ArticleInCatalog[]; reqestParams: RequestParams }) {
  const [params, setParams] = useState(reqestParams);
  const [news, setNews] = useState(newsArr);

  const newsCards = news.map((article) => <CreateArticleCard key={article.id} article={article} />);

  return (
    <>
      <Search paramsCallback={setParams} newsCallback={setNews} params={params} news={news} />
      <div className="flex flex-wrap gap-3 justify-center">{newsCards.length > 0 ? newsCards : 'Nothing was found'}</div>
    </>
  )
}