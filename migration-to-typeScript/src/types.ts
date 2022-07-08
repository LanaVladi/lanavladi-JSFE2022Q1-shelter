export interface ILoader {
  readonly baseLink: string;
  options: object;
}

export type Options = Record<string, string> | undefined;

export type Callback<T> = (data: T) => void;

export enum Endpoint {
  sources = 'sources',
  everything = 'everything',
}

// sources.ts & appView.ts
export interface IDataSources {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

export interface IDataDrawSources {
  status: string;
  sources: Array<IDataSources>;
}

// news.ts & appView.ts
export interface IDataNewsArticles {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export interface IDataDrawNews {
  status: string;
  totalResults: number;
  articles: Array<IDataNewsArticles>;
}