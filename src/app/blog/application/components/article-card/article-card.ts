import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogArticleModel } from '../../../domain/types/blog.entities';
import { formatDate } from '../../../../utils/format-date';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-card.html',
})
export class ArticleCard {
  article = input.required<BlogArticleModel>();

  protected formatDate(date: string): string {
    return formatDate(date);
  }

  protected getContentPreview(content: string): string {
    return content.slice(0, 100) + '...';
  }
}
