import { Observable } from "rxjs";
import { BlogArticle } from "../types/blog.entities";

export abstract class BlogGateway {

    abstract getAllBlogArticles() : Observable<BlogArticle[] | undefined>;
    abstract getOneBlogArticle(slug:string): Observable<BlogArticle | undefined>;
    
}