import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowTopRightOnSquare } from '@ng-icons/heroicons/outline';
import { BlogArticle, BlogArticleAuthor } from '../../../domain/types/blog.entities';

@Component({
  selector: 'app-article-author-bio',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './article-author-bio.html',
  viewProviders: [provideIcons({ heroArrowTopRightOnSquare })],
})
export class ArticleAuthorBio {
  public readonly author = input.required<BlogArticleAuthor>();
}
