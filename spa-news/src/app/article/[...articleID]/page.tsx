import { ArticleInCatalog } from "@/app/types";
import { ApiService } from "@/service/API/ApiService";
import Image from 'next/image';

export default async function Page({ params }: { params: { articleID: string[] } }) {
  const id = params.articleID.join('/');
  const apiService = new ApiService();
  const article: ArticleInCatalog = await apiService.getCurrentArticle(id);
  console.log(article.webTitle)

  return (
    <article className="flex flex-col	items-center p-3	">
      <h1 className="underline-offset-1	m-2 text-center	text-sky-900 font-extrabold	text-xl		">{article.webTitle}</h1>
      <Image src={article.fields.thumbnail} width={420} height={250} alt="" />
      <div dangerouslySetInnerHTML={{ __html: article.fields.body }} />
    </article>
  )
}