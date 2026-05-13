import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BlogGateway } from '../../../blog/domain/ports/blog.gateway';
import { InMemoryBlogArticlesGateway } from '../../../blog/infrastructure/in-memory-blog-gateway';
import { Article } from './article';

describe('Article', () => {
  let component: Article;
  let fixture: ComponentFixture<Article>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Article],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
        { provide: BlogGateway, useClass: InMemoryBlogArticlesGateway },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Article);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
