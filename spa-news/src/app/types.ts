export type ArticleInCatalog = {
  fields: {
    body: ReactNode;thumbnail: string
};
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}

export type ArticleResponse = {
  status: string;
  userTier: string;
  total: string;
  content: string;
}