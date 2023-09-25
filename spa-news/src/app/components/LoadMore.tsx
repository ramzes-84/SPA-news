import { fetchNextPageNews } from './server-actions';
import { ArticleInCatalog } from '../types';

export function LoadMore({
  newsCallback,
  oldNews,
}: {
  newsCallback: (news: ArticleInCatalog[]) => void;
  oldNews: ArticleInCatalog[];
}) {
  async function handleLoadingMore() {
    const nextPageNews = await fetchNextPageNews();
    const news = [...oldNews, ...nextPageNews];
    newsCallback(news);
  }

  return (
    <button className="flex p-2 m-2 rounded-2xl bg-slate-500 text-white" type="button" onClick={handleLoadingMore}>
      Load more
    </button>
  );
}
