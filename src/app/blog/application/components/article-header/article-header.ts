import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogArticleModel } from '../../../domain/types/blog.entities';
import { formatDate } from '../../../../utils/format-date';
import { ScrollSpy } from '../../../../shared/directives/scroll-spy';

@Component({
  selector: 'app-article-header',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollSpy],
  templateUrl: './article-header.html',
  styleUrls: ['./article-header.scss'],
})
export class ArticleHeader {
  blogArticle = input.required<BlogArticleModel>();

  formatDate = formatDate;
}
