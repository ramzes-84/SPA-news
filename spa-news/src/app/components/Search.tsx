import { FormEvent } from "react"
import { fetchNews } from "./server-actions";
import { ArticleInCatalog, RequestParams, Sort } from "../types";
import { params } from "../page";

export function Search(
  {
    newsCallback,
  }:
  {
    newsCallback: (news: ArticleInCatalog[]) => void;
  }) {

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJSON = Object.fromEntries(formData.entries());
    params.limit = formJSON.limit as unknown as number;
    params.sort = formJSON.sort as string;
    if(formJSON.keyword) params.keyword = formJSON.keyword as string;
    const foundNews = await fetchNews(params);
    newsCallback(foundNews);
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
  )
}
