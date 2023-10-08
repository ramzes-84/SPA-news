'use client';

import { ReactElement, createContext, useEffect, useState } from 'react';
import { RequestParams, Sort } from '../types';
import { CreateArticleCard } from './CreateArticleCard';
import { Search } from './Search';
import { Pagination } from './Pagination';
import { fetchNews } from './server-actions';
import { LoadMore } from './LoadMore';
import Loader from './loader';

export const Context = createContext({});
const params: RequestParams = {
  limit: 10,
  sort: Sort.Newest,
  page: 1,
  keyword: '',
};

export function NewsCatalog() {
  const [news, setNews] = useState<ReactElement[] | string>([]);
  const [config, setConfig] = useState<RequestParams>(params);
  const [counter, setCounter] = useState(config.page);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    async function loadNews() {
      setShowLoader(true);
      const newsArr = await fetchNews(config);
      if (newsArr.length === 0) {
        setNews('Nothing was found');
        setShowLoader(false);
        return;
      }
      const newsCards = newsArr.map((article) => <CreateArticleCard key={article.id} article={article} />);
      setNews(newsCards);
      setShowLoader(false);
    }
    loadNews();
  }, [config]);

  return (
    <Context.Provider value={{ config, setConfig, news, setNews, counter, setCounter }}>
      <Search />
      <div className="flex flex-wrap gap-3 justify-center">{news}</div>
      <nav className="flex flex-col flex-wrap justify-center items-center">
        {showLoader && <Loader />}
        <LoadMore />
        <Pagination />
      </nav>
    </Context.Provider>
  );
}
