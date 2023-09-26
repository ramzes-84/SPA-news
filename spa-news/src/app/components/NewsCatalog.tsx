'use client';

import { useState } from 'react';
import { ArticleInCatalog, RequestParams } from '../types';
import { CreateArticleCard } from './CreateArticleCard';
import { Search } from './Search';
import { LoadMore } from './LoadMore';

export function NewsCatalog({ newsArr, reqestParams }: { newsArr: ArticleInCatalog[]; reqestParams: RequestParams }) {
  const [news, setNews] = useState(newsArr);

  const newsCards = news.map((article) => <CreateArticleCard key={article.id} article={article} />);

  return (
    <>
      <Search newsCallback={setNews} />
      <div className="flex flex-wrap gap-3 justify-center">
        {newsCards.length > 0 ? newsCards : 'Nothing was found'}
      </div>
      <LoadMore newsCallback={setNews} oldNews={news} />
    </>
  );
}
