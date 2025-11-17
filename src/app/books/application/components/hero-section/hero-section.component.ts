import { Component, input } from '@angular/core';
import { WaveDivider } from "../../../../shared/components/wave-divider/wave-divider";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [WaveDivider],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  title = input.required<string>();
  bgUrl = input.required<string>();
}
