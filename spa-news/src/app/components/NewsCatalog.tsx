'use client';

import { createContext, useEffect, useState } from 'react';
import { RequestParams, Sort } from '../types';
// import { CreateArticleCard } from './CreateArticleCard';
// import { Search } from './Search';
// import { Pagination } from './Pagination';
// import { fetchNews } from './server-actions';
// import { LoadMore } from './LoadMore';
// import { Provider } from 'react-redux';
// import { store } from '@/store/store';
import { useGetNewsQuery } from '@/store/guardian/guardian.api';

// export const Context = createContext({});

export function NewsCatalog() {
  const params: RequestParams = {
    limit: 10,
    sort: Sort.Newest,
    page: 1,
    keyword: '',
  };
  const { isLoading, isError, data } = useGetNewsQuery(params);
  console.log(data);
  // const [news, setNews] = useState([<div key="start">Trying to load news...</div>]);
  // const [config, setConfig] = useState<RequestParams>(params);

  // useEffect(() => {
  //   async function loadNews() {
  //     const newsArr = await fetchNews(config);
  //     const newsCards = newsArr.map((article) => <CreateArticleCard key={article.id} article={article} />);
  //     setNews(newsCards);
  //   }
  //   loadNews();
  // }, [config]);

  return (
    <>
      <div></div>
      {/* <Search />
      <div className="flex flex-wrap gap-3 justify-center">{news.length > 0 ? news : 'Nothing was found'}</div>
      <nav className="flex flex-col flex-wrap justify-center">
        <LoadMore />
        <Pagination />
      </nav> */}
    </>
  );
}
