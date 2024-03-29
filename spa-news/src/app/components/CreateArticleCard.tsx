import Link from 'next/link';
import { ArticleInCatalog } from '../types';
import Image from 'next/image';

export function CreateArticleCard({ article }: { article: ArticleInCatalog }) {
  const articleLink = `article/${article.id}`;
  return (
    <Link href={articleLink} className="inline-block max-w-xs	border-2 rounded-2xl border-purple-500 overflow-hidden">
      <Image width={320} height={144} src={article.fields.thumbnail || '/no-image.png'} alt="photo" />
      <h4 className="p-1">{article.webTitle}</h4>
      <p className="p-1">Category: {article.sectionName}</p>
    </Link>
  );
}
