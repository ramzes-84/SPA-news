import { Sort } from '@/app/types';

const { API_KEY } = process.env;
const NEWS_ENDPOINT = 'https://content.guardianapis.com/search';
const ARTICLE_ENDPOINT = 'https://content.guardianapis.com/';

export class ApiService {
  public async getNews(limit: number = 10, order: Sort = Sort.newest, page: number = 1, key?: string) {
    let url = `${NEWS_ENDPOINT}?order-by=${order}&page-size=${limit}&page=${page}&api-key=${API_KEY}&show-fields=all`;
    if (key)
      url = `${NEWS_ENDPOINT}?order-by=${order}&page-size=${limit}&page=${page}&q=${key}&api-key=${API_KEY}&show-fields=all`;
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
