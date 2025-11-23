import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Partners } from './partners';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section';
import { RouterTestingModule } from '@angular/router/testing';

describe('Partners', () => {
  let component: Partners;
  let fixture: ComponentFixture<Partners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Partners, HeroSectionComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Partners);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render hero section with title', () => {
    const compiled = fixture.nativeElement;
    const title = compiled.querySelector('h1');
    expect(title?.textContent).toContain('Nos Partenaires');
  });

  it('should display page description', () => {
    const compiled = fixture.nativeElement;
    const description = compiled.querySelector('.prose');
    expect(description?.textContent).toContain('La Librairie des Autoédités');
    expect(description?.textContent).toContain('valoriser la littérature indépendante');
  });

  it('should render partner cards', () => {
    const compiled = fixture.nativeElement;
    const cards = compiled.querySelectorAll('.card');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('should display partner information', () => {
    const compiled = fixture.nativeElement;
    const partnerName = compiled.querySelector('.card-title');
    expect(partnerName?.textContent).toContain('Portail');
  });

  it('should have router links to partner pages', () => {
    const compiled = fixture.nativeElement;
    const links = compiled.querySelectorAll('a[routerLink]');
    expect(links.length).toBeGreaterThan(0);
  });

  it('should display partner highlights', () => {
    const compiled = fixture.nativeElement;
    const highlights = compiled.querySelectorAll('.card-body ul li');
    expect(highlights.length).toBeGreaterThan(0);
  });

  it('should display call to action section', () => {
    const compiled = fixture.nativeElement;
    const cta = compiled.querySelector('.card.bg-primary');
    expect(cta).toBeTruthy();
    expect(cta?.textContent).toContain('Vous souhaitez devenir partenaire');
  });

  it('should have contact email link', () => {
    const compiled = fixture.nativeElement;
    const emailLink = compiled.querySelector('a[href^="mailto:"]');
    expect(emailLink).toBeTruthy();
  });

  it('should display partner logo images', () => {
    const compiled = fixture.nativeElement;
    const images = compiled.querySelectorAll('figure img');
    expect(images.length).toBe(component.partners.length);
  });

  it('should have proper image alt text', () => {
    const compiled = fixture.nativeElement;
    const firstImage = compiled.querySelector('figure img');
    expect(firstImage?.getAttribute('alt')).toContain('Logo de');
  });
});
