import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowRight } from '@ng-icons/heroicons/outline';

/**
 * Partner card component
 *
 * Displays a partner with their logo, description, highlights, and a link to their detail page.
 * Uses DaisyUI card styling with hover glow effects.
 */
@Component({
  selector: 'app-partner-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './partner-card.html',
})
export class PartnerCardComponent {
  /**
   * Partner name
   */
  name = input.required<string>();

  /**
   * Partner URL slug for routing
   */
  slug = input.required<string>();

  /**
   * Partner description
   */
  description = input.required<string>();

  /**
   * Partner logo image URL
   */
  image = input.required<string>();

  /**
   * List of partner highlights/features
   */
  highlights = input.required<string[]>();
}
