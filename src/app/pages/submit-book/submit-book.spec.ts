import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitBook } from './submit-book';

describe('SubmitBook', () => {
  let component: SubmitBook;
  let fixture: ComponentFixture<SubmitBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitBook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitBook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
