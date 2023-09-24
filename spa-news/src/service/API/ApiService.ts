const { API_KEY } = process.env;
const NEWS_ENDPOINT = 'https://content.guardianapis.com/search';
const ARTICLE_ENDPOINT = 'https://content.guardianapis.com/';

export class ApiService {
  public async getNews(key?: string) {
    let url = `${NEWS_ENDPOINT}?api-key=${API_KEY}&show-fields=thumbnail`;
    if(key) url = `${NEWS_ENDPOINT}?q=${key}&api-key=${API_KEY}&show-fields=thumbnail`;
    const response = await fetch(url);
    if(response.status === 200) {
      const resFromJSON = await response.json();
      return resFromJSON.response.results;
    }
    throw new Error('There is something wrong with server!')
  }

  public async getNewsBySearch (searchWord: string) {
    const searchSegment = `?q=${searchWord}&`;
    const url = `${NEWS_ENDPOINT}${searchSegment}api-key=${API_KEY}&show-fields=thumbnail`;
    const response = await fetch(url);
    if(response.status === 200) {
      const resFromJSON = await response.json();
      return resFromJSON.response.results;
    }
    throw new Error('There is something wrong with server!')
  }

  public async getCurrentArticle (id: string) {
    const url = `${ARTICLE_ENDPOINT}${id}?api-key=${API_KEY}&show-fields=all`;
    const response = await fetch(url);
    if(response.status === 200) {
      const resFromJSON = await response.json();
      return resFromJSON.response.content;
    }
    throw new Error('There is something wrong with server!')
  }
}