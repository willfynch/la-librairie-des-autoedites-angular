import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnerDescriptionComponent } from './partner-description';
import { HeroSectionComponent } from '../../../../shared/components/hero-section/hero-section';

describe('PartnerDescriptionComponent', () => {
  let component: PartnerDescriptionComponent;
  let fixture: ComponentFixture<PartnerDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerDescriptionComponent, HeroSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartnerDescriptionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept required inputs', () => {
    fixture.componentRef.setInput('partnerName', 'Test Partner');
    fixture.componentRef.setInput('heroImage', 'https://example.com/image.jpg');
    fixture.detectChanges();

    expect(component.partnerName()).toBe('Test Partner');
    expect(component.heroImage()).toBe('https://example.com/image.jpg');
  });

  it('should render HeroSectionComponent with correct inputs', () => {
    fixture.componentRef.setInput('partnerName', 'Test Partner');
    fixture.componentRef.setInput('heroImage', 'https://example.com/image.jpg');
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const heroSection = compiled.querySelector('app-hero-section');

    expect(heroSection).toBeTruthy();
  });

  it('should display partner name in hero section', () => {
    fixture.componentRef.setInput('partnerName', 'Test Partner');
    fixture.componentRef.setInput('heroImage', 'https://example.com/image.jpg');
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const title = compiled.querySelector('h1');

    expect(title?.textContent?.trim()).toBe('Test Partner');
  });

  it('should apply hero background image', () => {
    const imageUrl = 'https://example.com/image.jpg';
    fixture.componentRef.setInput('partnerName', 'Test Partner');
    fixture.componentRef.setInput('heroImage', imageUrl);
    fixture.detectChanges();

    const heroDiv = fixture.nativeElement.querySelector('.hero');
    const bgImage = heroDiv?.style.backgroundImage;

    expect(bgImage).toContain(imageUrl);
  });

  it('should have prose-styled content section', () => {
    fixture.componentRef.setInput('partnerName', 'Test Partner');
    fixture.componentRef.setInput('heroImage', 'https://example.com/image.jpg');
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const article = compiled.querySelector('article');

    // Note: Testing ng-content projection requires a host component in real scenarios
    expect(article).toBeTruthy();
    expect(article?.classList).toContain('prose');
  });
});
