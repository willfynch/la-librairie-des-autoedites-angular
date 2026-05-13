import { Component, computed, input } from '@angular/core';

import { RouterLink } from '@angular/router';
import { formatDate } from '../../../../utils/format-date';
import { ScrollSpy } from '../../../../shared/directives/scroll-spy';
import { BlogArticle } from '../../../domain/types/blog.entities';

@Component({
  selector: 'app-article-header',
  standalone: true,
  imports: [RouterLink, ScrollSpy],
  templateUrl: './article-header.html'
})
export class ArticleHeader {
  public readonly blogArticle = input.required<BlogArticle>();
  protected readonly date = computed(() => formatDate(this.blogArticle().date));  
}
