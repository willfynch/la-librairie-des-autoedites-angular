import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowTopRightOnSquare } from '@ng-icons/heroicons/outline';
import { BlogArticle } from '../../../domain/types/blog.entities';

@Component({
  selector: 'app-article-author-bio',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './article-author-bio.html',
  styleUrls: ['./article-author-bio.scss'],
  viewProviders: [provideIcons({ heroArrowTopRightOnSquare })],
})
export class ArticleAuthorBio {
  blogArticle = input.required<BlogArticle>();
}
