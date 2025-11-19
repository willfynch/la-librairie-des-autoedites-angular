import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksCatalog } from './books-catalog';

describe('BooksCatalog', () => {
  let component: BooksCatalog;
  let fixture: ComponentFixture<BooksCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksCatalog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksCatalog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
