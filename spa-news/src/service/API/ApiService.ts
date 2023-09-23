import { ArticleResponse } from "@/app/types";

const { API_KEY } = process.env;
const NEWS_ENDPOINT = 'https://content.guardianapis.com/search';
const ARTICLE_ENDPOINT = 'https://content.guardianapis.com/';

export class ApiService {
  public async getNews () {
    const url = `${NEWS_ENDPOINT}?api-key=${API_KEY}&show-fields=thumbnail`;
    const response = await fetch(url);
    if(response.status === 200) {
      const resFromJSON = await response.json();
      // console.log(resFromJSON.response.results);
      return resFromJSON.response.results;
    }
    throw new Error('There is something wrong with server!')
  }

  public async getCurrentArticle (id: string) {
    const url = `${ARTICLE_ENDPOINT}${id}?api-key=${API_KEY}&show-fields=all`;
    const response = await fetch(url);
    if(response.status === 200) {
      const resFromJSON = await response.json();
      // console.log('-------------',resFromJSON.response);
      return resFromJSON.response.content;
    }
    throw new Error('There is something wrong with server!')
  }
}