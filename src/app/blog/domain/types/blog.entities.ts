  export interface BlogArticleModel {
    slug: string;
    title: string;
    content: string;
    tags: string[];
    cover: string | undefined;
    date: string;
    author: BlogArticleAuthorModel;
    category: BlogArticleCategory;
}

export interface BlogArticleAuthorModel {
  author_name: string;
  author_pic: string;
  author_description: string;
  author_link: string;
  author_title: string;
}


//export type MatterResult = ReturnType<typeof matter>;
export type BlogArticleCategory = "auto-édition" | "écriture" | "promotion";