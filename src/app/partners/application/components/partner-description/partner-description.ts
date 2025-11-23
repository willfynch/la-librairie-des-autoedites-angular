import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../../../shared/components/hero-section/hero-section';

/**
 * Reusable partner description component with hero section and content projection.
 *
 * This component provides a structured layout for partner pages with:
 * - A hero section with customizable background image and partner name
 * - Content projection via ng-content for flexible, rich partner-specific content
 * - Responsive design using TailwindCSS and DaisyUI
 *
 * @example
 * ```html
 * <app-partner-description
 *   partnerName="Le portail de l'auto-édition"
 *   heroImage="https://example.com/hero.png">
 *
 *   <p>Custom partner content here...</p>
 *
 * </app-partner-description>
 * ```
 */
@Component({
  selector: 'app-partner-description',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent],
  templateUrl: './partner-description.html',
  styleUrls: ['./partner-description.scss'],
})
export class PartnerDescriptionComponent {
  /**
   * Partner name displayed in the hero section title
   */
  partnerName = input.required<string>();

  /**
   * URL of the hero background image
   */
  heroImage = input.required<string>();
}
