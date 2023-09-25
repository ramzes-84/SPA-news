import { ArticleInCatalog } from '@/app/types';
import { ApiService } from '@/service/API/ApiService';
import Image from 'next/image';
import Link from 'next/link';
import BackButton from './components/BackButton';

export default async function Page({ params }: { params: { articleID: string[] } }) {
  const id = params.articleID.join('/');
  const apiService = new ApiService();
  const article: ArticleInCatalog = await apiService.getCurrentArticle(id);
  const articleDate = new Date(article.webPublicationDate);

  return (
    <article className="flex flex-col	items-center p-3	">
      <h1 className="underline-offset-1	m-2 text-center	text-sky-900 font-extrabold	text-xl">{article.webTitle}</h1>
      <p>Date: {`${articleDate.getFullYear()}-${articleDate.getMonth() + 1}-${articleDate.getDate()}`}</p>
      <Image src={article.fields.thumbnail || '/no-image.png'} width={420} height={250} alt="" />
      <div className="flex justify-around gap-2">
        <BackButton />
        <Link href={article.webUrl}>
          <button className="p-2 m-2 rounded-2xl bg-slate-500 text-white">Read on Guardian site</button>
        </Link>
      </div>
      <div dangerouslySetInnerHTML={{ __html: article.fields.body }} />
    </article>
  );
}
