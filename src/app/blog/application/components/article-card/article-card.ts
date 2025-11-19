import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { formatDate } from '../../../../utils/format-date';
import { BlogArticle } from '../../../domain/types/blog.entities';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-card.html',
})
export class ArticleCard {
  public readonly article = input.required<BlogArticle>();
  protected contentPreview = computed(()=>(this.article().content.slice(0, 100) + '...'));
  protected date = computed(()=>formatDate(this.article().date));
}
