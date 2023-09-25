import { FormEvent, useEffect, useRef } from "react";
import { params } from "../page";
import { autoFetchMoreNews, fetchNextPageNews } from "./server-actions";
import { ArticleInCatalog } from "../types";

export function LoadMore({ newsCallback, oldNews }: { newsCallback: (news: ArticleInCatalog[]) => void; oldNews: ArticleInCatalog[] }) {
  const bottom = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting) {
        const newBatch = await autoFetchMoreNews(params, oldNews);
        newsCallback(newBatch)
      }
    });
    observer.observe(bottom.current);
  }, [newsCallback, oldNews]);

  async function handleLoadingMore() {
    const nextPageNews = await fetchNextPageNews(params);
    const news = [...oldNews, ...nextPageNews];
    newsCallback(news);
  }

  return (
    <button ref={bottom} className="p-2 m-2 rounded-2xl bg-slate-500 text-white" type="button" onClick={handleLoadingMore} >Load more</button>
  )
}
