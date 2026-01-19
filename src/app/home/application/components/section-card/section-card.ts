import { Component, input, ViewEncapsulation } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.html',
  imports: [RouterLink],
  styleUrl: './section-card.scss',
})
export class SectionCard {
  readonly image = input.required<string>();
  readonly appearingPicture = input.required<string>();
  readonly title = input.required<string>();
  readonly path = input.required<string>();
  readonly description = input.required<string>();
}
