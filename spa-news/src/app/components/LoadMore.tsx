import { useContext } from 'react';
import { IContext } from '../types';
import { fetchNews } from './server-actions';
import { CreateArticleCard } from './CreateArticleCard';
import { Context } from './NewsCatalog';

export function LoadMore() {
  const { news, setNews, config, counter, setCounter } = useContext(Context) as unknown as IContext;

  async function handleLoadingMore() {
    const newPage = counter + 1;
    const nextPageNews = await fetchNews({ ...config, page: newPage });
    const newsCards = nextPageNews.map((article) => <CreateArticleCard key={article.id} article={article} />);
    const newsBatch = [...news, ...newsCards];
    setCounter(newPage);
    setNews(newsBatch);
  }

  return (
    <button className="p-2 m-2 rounded-2xl bg-slate-500 text-white" type="button" onClick={handleLoadingMore}>
      Load more
    </button>
  );
}
