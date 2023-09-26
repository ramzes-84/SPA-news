import { RequestParams } from '@/app/types';

const { API_KEY } = process.env;
const NEWS_ENDPOINT = 'https://content.guardianapis.com/search';
const ARTICLE_ENDPOINT = 'https://content.guardianapis.com/';

export class ApiService {
  public async getNews(params: RequestParams) {
    const url = `${NEWS_ENDPOINT}?order-by=${params.sort}&page-size=${params.limit}&page=${params.page}&q=${params.keyword}&api-key=${API_KEY}&show-fields=all`;
    const response = await fetch(url);
    if (response.status === 200) {
      const resFromJSON = await response.json();
      return resFromJSON.response.results;
    }
    throw new Error('There is something wrong with server!');
  }

  public async getCurrentArticle(id: string) {
    const url = `${ARTICLE_ENDPOINT}${id}?api-key=${API_KEY}&show-fields=all`;
    const response = await fetch(url);
    if (response.status === 200) {
      const resFromJSON = await response.json();
      return resFromJSON.response.content;
    }
    throw new Error('There is something wrong with server!');
  }
}
