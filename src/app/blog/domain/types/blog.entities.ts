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
  authorName: string;
  authorPic: string;
  authorDescription: string;
  authorLink: string;
  authorTitle: string;
}

//export type MatterResult = ReturnType<typeof matter>;
export type BlogArticleCategory = "auto-édition" | "écriture" | "promotion";