import { Component, inject } from '@angular/core';
import { InMemoryBlogArticlesGateway } from '../../blog/infrastructure/in-memory-blog-gateway';
import { toSignal } from '@angular/core/rxjs-interop';
import { ArticleCard } from "../../blog/application/components/article-card/article-card";
import { BlogGateway } from '../../blog/domain/ports/blog.gateway';

@Component({
  selector: 'app-blog',
  imports: [ArticleCard],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {

  protected articles = toSignal(inject(BlogGateway).getAllBlogArticles());

}
