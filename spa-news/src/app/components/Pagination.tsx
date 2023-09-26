import { fetchNewsBatch } from './server-actions';
import { ArticleInCatalog, RequestParams } from '../types';

export function Pagination({
  params,
  newsCallback,
  oldNews,
}: {
  params: RequestParams;
  newsCallback: (news: ArticleInCatalog[]) => void;
  oldNews: ArticleInCatalog[];
}) {
  async function handleNextPage() {
    params.page += 1;
    const newsBatch = await fetchNewsBatch(params);
    newsCallback(newsBatch);
  }
  async function handlePrevPage() {
    if (params.page === 1) return;
    params.page -= 1;
    const newsBatch = await fetchNewsBatch(params);
    newsCallback(newsBatch);
  }

  return (
    <div className="flex justify-center items-center gap-2">
      <button className="p-2 m-2 rounded-2xl bg-slate-500 text-white" type="button" onClick={handlePrevPage}>
        Previous page
      </button>
      <div className="inline-block text-lg">{params.page}</div>
      <button className="p-2 m-2 rounded-2xl bg-slate-500 text-white" type="button" onClick={handleNextPage}>
        Next page
      </button>
    </div>
  );
}
