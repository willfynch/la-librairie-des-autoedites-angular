import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ArticleCard } from "../../blog/application/components/article-card/article-card";
import { BlogGateway } from '../../blog/domain/ports/blog.gateway';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section";
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-blog',
  imports: [ArticleCard, HeroSectionComponent, NgIcon],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {

  protected articles = toSignal(inject(BlogGateway).getAllBlogArticles());

}
