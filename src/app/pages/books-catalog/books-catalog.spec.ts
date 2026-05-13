import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BooksGateway } from '../../books/domain/ports/books.gateway';
import { InMemoryBooksGateway } from '../../books/infrastructure/in-memory-books-gateway';
import { BooksCatalog } from './books-catalog';

describe('BooksCatalog', () => {
  let component: BooksCatalog;
  let fixture: ComponentFixture<BooksCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksCatalog],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
        { provide: BooksGateway, useClass: InMemoryBooksGateway },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BooksCatalog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
