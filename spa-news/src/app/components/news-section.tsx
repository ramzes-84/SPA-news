import React, { useContext, useEffect } from 'react';
import { IContext } from '../types';
import { CreateArticleCard } from './CreateArticleCard';
import { Context } from './NewsCatalog';
import { fetchNews } from './server-actions';

const NewsSection = () => {
  const { config, setNews, news } = useContext(Context) as unknown as IContext;

  useEffect(() => {
    async function loadNews() {
      const newsArr = await fetchNews(config);
      const newsCards = newsArr.map((article) => <CreateArticleCard key={article.id} article={article} />);
      setNews(newsCards);
    }
    loadNews();
  }, [config, setNews]);

  return <div className="flex flex-wrap gap-3 justify-center">{news.length > 0 ? news : 'Nothing was found'}</div>;
};

export default NewsSection;
