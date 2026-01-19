import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section';
import { SectionCard } from '../../home/application/components/section-card/section-card';

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, SectionCard],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  sections: { title: string; path: string; image: string; description: string, appearingPicture: string }[] = [
    {
      title: 'Librairie',
      path: 'livres',
      image: 'https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg',
      description:
        'Découvrez notre catalogue de livres auto-édités par des auteurs indépendants francophones',
      appearingPicture: 'images/home/sections/library.webp',
    },
    {
      title: 'Blog',
      path: 'blog',
      image: 'images/hero-images/blog.webp',
      description:
        'Actualités et conseils pour les auteurs auto-édités et les lecteurs passionnés',
      appearingPicture: 'images/home/sections/blog.webp',
    },
    {
      title: 'Proposer mon livre',
      path: 'proposer-mon-livre',
      image: 'images/home/sections/submit_cover.webp',
      description: 'Remplissez le formulaire pour proposer votre livre',
      appearingPicture: 'images/home/sections/submit_hover.webp'
    }
  ];
}
