import { fetchNewsBatch } from './server-actions';
import { ArticleInCatalog, RequestParams } from '../types';
import { useState } from 'react';

export function Pagination({
  params,
  newsCallback,
  oldNews,
}: {
  params: RequestParams;
  newsCallback: (news: ArticleInCatalog[]) => void;
  oldNews: ArticleInCatalog[];
}) {
  const [loading, setLoading] = useState(false);


  async function handleNextPage() {
    setLoading(true)
    params.page += 1;
    const newsBatch = await fetchNewsBatch(params);
    newsCallback(newsBatch);
    setLoading(false)
  }
  async function handlePrevPage() {
    setLoading(true)
    if (params.page === 1) {
      setLoading(false)
      return
    };
    params.page -= 1;
    const newsBatch = await fetchNewsBatch(params);
    newsCallback(newsBatch);
    setLoading(false)
  }

  return (
    <div className="flex justify-center items-center gap-2">
      <button className="p-2 m-2 rounded-2xl bg-slate-500 text-white" type="button" onClick={handlePrevPage}>
        Previous page
      </button>
      {loading ? <p className='text-center'>Loading...</p> : <div className="inline-block text-lg">{params.page}</div>}
      <button className="p-2 m-2 rounded-2xl bg-slate-500 text-white" type="button" onClick={handleNextPage}>
        Next page
      </button>
    </div>
  );
}
