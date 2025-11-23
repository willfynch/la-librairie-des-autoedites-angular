import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section';
import { PartnerCardComponent } from '../../partners/application/components/partner-card/partner-card';

/**
 * Partners index page
 *
 * This page lists all partners of La Librairie des Autoédités
 * and provides links to their dedicated pages.
 */
@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [HeroSectionComponent, PartnerCardComponent],
  templateUrl: './partners.html',
})
export class Partners {
  protected readonly HERO_IMAGE =
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop';

  protected readonly partners = [
    {
      name: 'Le Portail de l\'Auto-édition',
      slug: 'portail-ae',
      description:
        'Fondé par Abby, le Portail AE valorise les auteurs et autrices de la littérature indépendante depuis 2017.',
      image: '/images/partners/portail-ae-logo.webp',
      highlights: [
        'Présentations trimestrielles des nouveautés',
        'Émission en direct avec Littlepurplebooks',
        'Service presse',
      ],
    },
  ];
}
