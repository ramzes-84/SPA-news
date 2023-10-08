import { IContext } from '../types';
import { useContext } from 'react';
import { Context } from './NewsCatalog';

export function Pagination() {
  const { setConfig, config } = useContext(Context) as unknown as IContext;

  function handleNextPage() {
    const newPage = config.page + 1;
    const newConfig = { ...config, page: newPage };
    setConfig(newConfig);
  }
  function handlePrevPage() {
    if (config.page < 2) return;
    const newPage = config.page - 1;
    const newConfig = { ...config, page: newPage };
    setConfig(newConfig);
  }

  return (
    <div className="flex justify-center items-center gap-2">
      <button className="p-2 m-2 rounded-2xl bg-slate-500 text-white" type="button" onClick={handlePrevPage}>
        Previous page
      </button>
      <div className="inline-block text-lg">{config.page}</div>
      <button className="p-2 m-2 rounded-2xl bg-slate-500 text-white" type="button" onClick={handleNextPage}>
        Next page
      </button>
    </div>
  );
}
