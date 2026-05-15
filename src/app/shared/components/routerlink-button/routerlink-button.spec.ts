import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterlinkButton } from './routerlink-button';

describe('RouterlinkButton', () => {
  let component: RouterlinkButton;
  let fixture: ComponentFixture<RouterlinkButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterlinkButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterlinkButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
