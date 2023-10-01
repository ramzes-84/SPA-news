import { FormEvent, useContext } from 'react';
import { IContext, RequestParams, Sort } from '../types';
import { Context } from './NewsCatalog';

export function Search() {
  const { setConfig } = useContext(Context) as unknown as IContext;

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJSON = Object.fromEntries(formData.entries());
    const newConfig: RequestParams = {
      limit: formJSON.limit as unknown as number,
      sort: formJSON.sort as Sort,
      keyword: formJSON.keyword as string,
      page: 1
    }
    setConfig(newConfig);
  }

  return (
    <section className="rounded-2xl bg-slate-500 text-white m-2 p-2">
      <form className="flex justify-center gap-2" name="myInput" onSubmit={handleSearch}>
        <input className="text-black" type="text" name="keyword" />
        <select className="text-black" name="limit">
          <option value="10">10 items per page</option>
          <option value="20">20 items per page</option>
        </select>
        <select className="text-black" name="sort">
          <option value="newest">Show newest first</option>
          <option value="oldest">Show oldest first</option>
          <option value="relevance">Sort by relevance</option>
        </select>
        <button type="submit">Get news!</button>
      </form>
    </section>
  );
}
