import { useRouter } from "next/navigation";
import { FormEvent } from "react"
import { fetchNews } from "./server-actions";

export function Search({ callback }) {

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJSON = Object.fromEntries(formData.entries());
    const foundNews = await fetchNews(formJSON);
    callback(foundNews);
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
