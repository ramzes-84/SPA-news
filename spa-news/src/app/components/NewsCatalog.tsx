'use client';

import { createContext, useEffect, useState } from 'react';
import { RequestParams, Sort } from '../types';
import { CreateArticleCard } from './CreateArticleCard';
import { Search } from './Search';
import { Pagination } from './Pagination';
import { fetchNews } from './server-actions';

export const Context = createContext({});

export function NewsCatalog() {
  const params: RequestParams = {
    limit: 10,
    sort: Sort.Newest,
    page: 1,
    keyword: '',
  };
  const [news, setNews] = useState([]);
  const [config, setConfig] = useState<RequestParams>(params);

  useEffect(() => {
    async function loadNews() {
      const newsArr = await fetchNews(config);
      const newsCards = newsArr.map((article) => <CreateArticleCard key={article.id} article={article} />);
      setNews(newsCards);
    }
    loadNews();
  }, [config]);

  return (
    <Context.Provider value={{ config, setConfig}}>
      <Search />
      <div className="flex flex-wrap gap-3 justify-center">
        {news.length > 0 ? news : null}
      </div>
      <Pagination />
    </Context.Provider>
  );
}
