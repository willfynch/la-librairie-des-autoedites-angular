import { Component, input, InputSignal } from '@angular/core';
import { WaveDivider } from "../wave-divider/wave-divider";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [WaveDivider],
  templateUrl: './hero-section.html',
})
export class HeroSectionComponent {
  public readonly title = input.required<string>();
  public readonly bgUrl = input.required<string>();
}
