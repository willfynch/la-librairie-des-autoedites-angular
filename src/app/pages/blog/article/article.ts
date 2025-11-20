import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BlogGateway } from '../../../blog/domain/ports/blog.gateway';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { ArticleHeader } from '../../../blog/application/components/article-header/article-header';
import { ArticleAuthorBio } from '../../../blog/application/components/article-author-bio/article-author-bio';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-article',
  imports: [ArticleHeader, ArticleAuthorBio, MarkdownComponent],
  templateUrl: './article.html',
  styleUrl: './article.scss',
})
export class Article {
  private readonly _route = inject(ActivatedRoute);
  private readonly _blogGateway = inject(BlogGateway);

  private readonly _slug$ = this._route.paramMap.pipe(map((params) => params.get('slug')));
  protected readonly article = toSignal(
    this._slug$.pipe(switchMap((slug) => this._blogGateway.getOneBlogArticle(slug!)))
  );
}
