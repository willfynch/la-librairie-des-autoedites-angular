import { BlogArticle } from "../types/blog-articles.entities";

export abstract class BlogArticlesGateway {

    abstract getAllBlogArticles(): BlogArticle[];
    abstract getOneBlogArticle(): BlogArticle | null;

}