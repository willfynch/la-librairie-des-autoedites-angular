import { Attribute, Component, input } from '@angular/core';
import { WaveDivider } from '../wave-divider/wave-divider';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [WaveDivider],
  styleUrl: './hero-section.scss',
  templateUrl: './hero-section.html',
})
export class HeroSectionComponent {
  public readonly title = input.required<string>();
  public readonly bgUrl = input.required<string>();

  constructor(
    @Attribute('fullSize') public readonly fullSize: boolean = false,
    @Attribute('animatedTitle') public readonly animatedTitle: boolean = false
  ) {}
}
