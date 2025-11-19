import { Component } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { URLS_CONSTANTS } from '../../../utils/constants';
import { WaveDivider } from "../wave-divider/wave-divider";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconComponent, WaveDivider],
  templateUrl: './footer.html',
})
export class Footer {
  // URLs
  protected readonly websiteUrl = URLS_CONSTANTS.WEBSITE_URL;
  protected readonly instaUrl = URLS_CONSTANTS.INSTA_URL;
  protected readonly substackUrl = URLS_CONSTANTS.SUBSTACK_URL;
  protected readonly threadsUrl = URLS_CONSTANTS.THREADS_URL;

  // Current year for copyright
  protected readonly currentYear = new Date().getFullYear();
}
