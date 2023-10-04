import { createContext, useEffect, useState } from 'react';
import { RequestParams, Sort } from '../types';
import { CreateArticleCard } from './CreateArticleCard';
import { Search } from './Search';
import { Pagination } from './Pagination';
import { LoadMore } from './LoadMore';
// import { store } from '@/store/store';
import { useGetNewsQuery } from '@/store/guardian/guardian.api';


export function NewsCatalog() {
  const params: RequestParams = {
    limit: 10,
    sort: Sort.Newest,
    page: 1,
    keyword: '',
  };
  const [config, setConfig] = useState<RequestParams>(params);
  const { isLoading, isError, data } = useGetNewsQuery(config, {
    refetchOnFocus: true,
  });
  // const [news, setNews] = useState([<div key="start">Trying to load news...</div>]);
  // const newsCards = data?.map((article) => <CreateArticleCard key={article.id} article={article} />);

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
      {/* <Search /> */}
      {isError && <p>There was an error while loading news. Please try later.</p>}
      {isLoading && <p>Loading news, please be patient...</p>}
      <div className="flex flex-wrap gap-3 justify-center">{data?.map((article) => <CreateArticleCard key={article.id} article={article} />)}</div>
      {/* <nav className="flex flex-col flex-wrap justify-center">
        <LoadMore />
        <Pagination />
      </nav> */}
    </>
  );
}
