import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BlogGateway } from '../../blog/domain/ports/blog.gateway';
import { InMemoryBlogArticlesGateway } from '../../blog/infrastructure/in-memory-blog-gateway';
import { Blog } from './blog';

describe('Blog', () => {
  let component: Blog;
  let fixture: ComponentFixture<Blog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blog],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
        { provide: BlogGateway, useClass: InMemoryBlogArticlesGateway },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Blog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
