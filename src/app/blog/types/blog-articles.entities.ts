  export type BlogArticle = {
    slug: string;
    title: string;
    content: string;
    tags: string[];
    cover: string | undefined;
    date: string;
    author: BlogArticleAuthor;
    category: BlogArticleCategory;
}

export type BlogArticleAuthor = {
  author_name: string;
  author_pic: string;
  author_description: string;
  author_link: string;
  author_title: string;
}

export type BlogArticleCategory = "auto-édition" | "écriture" | "promotion";
