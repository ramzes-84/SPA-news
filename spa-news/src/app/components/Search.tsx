import { ChangeEvent, useContext } from 'react';
import { IContext } from '../types';
import { Context } from './NewsCatalog';

export function Search() {
  const { config, setConfig } = useContext(Context) as unknown as IContext;
  let timerID: string | number | NodeJS.Timeout | undefined;

  function onChange(e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) {
    e.preventDefault;
    if (e.target instanceof HTMLInputElement && e.target.value.length < 3) {
      return;
    }
    if (timerID) clearTimeout(timerID);
    timerID = setTimeout(() => {
      setConfig({ ...config, [e.target.name]: e.target.value });
    }, 1000);
  }

  return (
    <section className="rounded-2xl bg-slate-500 text-white m-2 p-2">
      <form className="flex justify-center gap-2" name="myInput">
        <input
          placeholder="Enter 3 or more letters..."
          className="text-black"
          type="text"
          name="keyword"
          onChange={(e) => onChange(e)}
        />
        <select className="text-black" name="limit" onChange={(e) => onChange(e)} defaultValue={config.limit}>
          <option value="10">10 items per page</option>
          <option value="20">20 items per page</option>
        </select>
        <select className="text-black" name="sort" onChange={(e) => onChange(e)} defaultValue={config.sort}>
          <option value="newest">Show newest first</option>
          <option value="oldest">Show oldest first</option>
          <option value="relevance">Sort by relevance</option>
        </select>
      </form>
    </section>
  );
}
