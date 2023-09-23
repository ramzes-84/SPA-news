import { ArticleInCatalog } from "../types";
import Image from 'next/image';


export function CreateArticleCard({ article }: { article: ArticleInCatalog}) {
  return (
    <div className="inline-block max-w-xs	border-2 rounded-2xl border-purple-500 overflow-hidden">
      <Image width={320} height={144} src={article.fields.thumbnail} alt="photo" />
      <h4 className="p-1">{article.webTitle}</h4>
      <p className="p-1">Category: {article.sectionName}</p>
    </div>
  )
}