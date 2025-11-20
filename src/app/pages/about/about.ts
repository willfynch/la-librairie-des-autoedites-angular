import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { URLS_CONSTANTS } from '../../utils/constants';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section";

@Component({
  selector: 'app-about',
  imports: [RouterLink, HeroSectionComponent],
  templateUrl: './about.html',
})
export class About {
  protected readonly URLS_CONSTANTS = URLS_CONSTANTS;
}
