export type ArticleInCatalog = {
  fields?: {
    body: string;
    thumbnail: string;
  };
  id: string
  type: string
  sectionId: string
  sectionName: string
  webPublicationDate: string
  webTitle: string
  webUrl: string
  apiUrl: string
  isHosted: boolean
  pillarId: string
  pillarName: string
};

export type ArticleResponse = {
  status: string;
  userTier: string;
  total: string;
  content: string;
};

export enum Sort {
  Newest = 'newest',
  Oldest = 'oldest',
  Relevance = 'relevance',
}

export type RequestParams = {
  limit: number;
  sort: Sort;
  page: number;
  keyword: string;
};

export interface IContext {
  news: [];
  setNews: ([]) => void;
  config: RequestParams;
  setConfig: ({}) => void;
}

export interface NewsResponse<T> {
  status: string
  userTier: string
  total: number
  startIndex: number
  pageSize: number
  currentPage: number
  pages: number
  orderBy: string
  results: T[]
}
