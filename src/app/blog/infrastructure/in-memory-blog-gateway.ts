import { Injectable } from '@angular/core';
import data from "../mock/articles.json";
import { defer, map, Observable, of } from 'rxjs';
import { BlogGateway } from '../domain/ports/blog.gateway';
import { BlogArticle } from '../domain/types/blog.entities';

@Injectable({ providedIn: 'root' })
export class InMemoryBlogArticlesGateway implements BlogGateway {

  private static _articles: BlogArticle[] = data.articles as BlogArticle[];

  getAllBlogArticles(): Observable<BlogArticle[]> {
    return defer(() => of(InMemoryBlogArticlesGateway._articles));
  }

  getOneBlogArticle(slug:string): Observable<BlogArticle | undefined> {
    return this.getAllBlogArticles().pipe(
      map((articles) => articles.findLast((article) => article.slug === slug))
    )
  }

}
