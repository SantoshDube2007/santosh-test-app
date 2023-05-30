export interface blogsmodel {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }

  export interface postsmodel {
    id: number;
    title: string;
    body: string;
  }

  export interface usermodel {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
  }