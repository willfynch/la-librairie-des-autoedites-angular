import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../../shared/components/hero-section/hero-section';
import { InstafeedComponent } from '../../../partners/application/components/instafeed/instafeed';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowLeft } from '@ng-icons/heroicons/outline';
import { PartnerInstaFeed } from '../../../partners/domain/types/partners.entities';
import { CtaBanner } from '../../../shared/components/cta-banner/cta-banner';
import { RouterLink } from '@angular/router';

/**
 * Portail AE partner page
 *
 * This page showcases the Portail de l'auto-édition partner,
 * founded by Abby, which promotes self-published authors.
 */
@Component({
  selector: 'app-portail-ae',
  imports: [HeroSectionComponent, InstafeedComponent, NgIconComponent, CtaBanner, RouterLink],
  templateUrl: './portail-ae.html',
  viewProviders: [
    provideIcons({
      heroArrowLeft,
    }),
  ],
})
export class PortailAE {
  protected INSTAFEED: PartnerInstaFeed = {
    account: {
      name: 'portailautoedition',
      link: 'https://www.instagram.com/portailautoedition/',
    },
    posts: [
      {
        image: 'images/partners/portail-ae/portail-ae-instafeed/insta1.webp',
        link: 'https://www.instagram.com/p/DADO4GgNBuG/',
        alt: 'Projet Pandore : Science-fiction, paranormal',
      },
      {
        image: 'images/partners/portail-ae/portail-ae-instafeed/insta2.webp',
        link: 'https://www.instagram.com/p/DAA_xootUZK/',
        alt: 'Alfur SÖgur : heroic fantasy',
      },
      {
        image: 'images/partners/portail-ae/portail-ae-instafeed/insta6.webp',
        link: 'https://www.instagram.com/p/DAJf9INtZDq/',
        alt: 'Le bruit des anges : roman',
      },
      {
        image: 'images/partners/portail-ae/portail-ae-instafeed/insta7.webp',
        link: 'https://www.instagram.com/p/C__E15mNRmm/',
        alt: "Let's dance : romance fantastique",
      },
      {
        image: 'images/partners/portail-ae/portail-ae-instafeed/insta8.webp',
        link: 'https://www.instagram.com/p/C_sS0n9t8_6/',
        alt: 'Podcast : dédicacer en librairie',
      },
      {
        image: 'images/partners/portail-ae/portail-ae-instafeed/insta9.webp',
        link: 'https://www.instagram.com/p/DAd_jtZNGVq/',
        alt: 'Concours des parutions trimestrielles',
      },
    ],
  };
  protected readonly HERO_IMAGE =
    'https://api.tipeee.com/uploads/media/image/png/20230614/202306146489a749132a8.png';
}
