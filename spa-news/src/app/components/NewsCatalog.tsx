'use client';

import { createContext, useEffect, useState } from 'react';
import { RequestParams, Sort } from '../types';
import { CreateArticleCard } from './CreateArticleCard';
import { Search } from './Search';
import { Pagination } from './Pagination';
import { fetchNews } from './server-actions';
import { LoadMore } from './LoadMore';

export const Context = createContext({});
const params: RequestParams = {
  limit: 10,
  sort: Sort.Newest,
  page: 1,
  keyword: '',
};

export function NewsCatalog() {
  const [news, setNews] = useState([<div key="start">Trying to load news...</div>]);
  const [config, setConfig] = useState<RequestParams>(params);
  const [counter, setCounter] = useState(config.page);

  useEffect(() => {
    async function loadNews() {
      const newsArr = await fetchNews(config);
      const newsCards = newsArr.map((article) => <CreateArticleCard key={article.id} article={article} />);
      setNews(newsCards);
    }
    loadNews();
  }, [config]);

  return (
    <Context.Provider value={{ config, setConfig, news, setNews, counter, setCounter }}>
      <Search />
      <div className="flex flex-wrap gap-3 justify-center">{news.length > 0 ? news : 'Nothing was found'}</div>
      <nav className="flex flex-col flex-wrap justify-center">
        <LoadMore />
        <Pagination />
      </nav>
    </Context.Provider>
  );
}
