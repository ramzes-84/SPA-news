import { useContext } from 'react';
import { IContext } from '../types';
import { Context } from './NewsCatalog';
import { fetchNews } from './server-actions';
import { CreateArticleCard } from './CreateArticleCard';

export function LoadMore() {
  const { news, setNews, config } = useContext(Context) as unknown as IContext;

  async function handleLoadingMore() {
    config.page += 1;
    const nextPageNews = await fetchNews(config);
    const newsCards = nextPageNews.map((article) => <CreateArticleCard key={article.id} article={article} />);
    const newsBatch = [...news, ...newsCards];
    setNews(newsBatch);
  }

  return (
    <button className="p-2 m-2 rounded-2xl bg-slate-500 text-white" type="button" onClick={handleLoadingMore}>
      Load more
    </button>
  );
}
