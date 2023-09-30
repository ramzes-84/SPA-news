'use client';

import { createContext, useState } from 'react';
import { ArticleInCatalog, IContext, RequestParams } from '../types';
import { CreateArticleCard } from './CreateArticleCard';
import { Search } from './Search';
import { Pagination } from './Pagination';

export const Context = createContext({});

export function NewsCatalog({ newsArr, reqestParams }: { newsArr: ArticleInCatalog[]; reqestParams: RequestParams }) {
  const [news, setNews] = useState(newsArr);
  const [config, setConfig] = useState(reqestParams);
  const newsCards = news.map((article) => <CreateArticleCard key={article.id} article={article} />);

  return (
    <Context.Provider value={{ news, setNews, config, setConfig }}>
      <Search />
      <div className="flex flex-wrap gap-3 justify-center">
        {newsCards.length > 0 ? newsCards : 'Nothing was found'}
      </div>
      <Pagination params={config} newsCallback={setNews} />
    </Context.Provider>
  );
}
