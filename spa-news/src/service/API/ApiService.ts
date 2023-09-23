const { API_KEY } = process.env;
const CONTENT_ENDPOINT = 'https://content.guardianapis.com/search';

export class ApiService {
  public async getNews () {
    const url = `${CONTENT_ENDPOINT}?api-key=${API_KEY}&show-fields=thumbnail`;
    const response = await fetch(url);
    if(response.status === 200) {
      const resFromJSON = await response.json();
      console.log(resFromJSON.response.results);
      return resFromJSON.response.results;
    }
    throw new Error('There is something wrong with server!')
  }
}