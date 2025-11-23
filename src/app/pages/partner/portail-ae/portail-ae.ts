import { Component } from '@angular/core';
import { PartnerDescriptionComponent } from '../../../partners/application/components/partner-description/partner-description';
import { InstafeedComponent } from '../../../partners/application/components/instafeed/instafeed';
import { INSTAFEED } from '../../../utils/constants';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowTopRightOnSquare } from '@ng-icons/heroicons/outline';

/**
 * Portail AE partner page
 *
 * This page showcases the Portail de l'auto-édition partner,
 * founded by Abby, which promotes self-published authors.
 */
@Component({
  selector: 'app-portail-ae',
  standalone: true,
  imports: [PartnerDescriptionComponent, InstafeedComponent, NgIconComponent],
  templateUrl: './portail-ae.html',
  viewProviders: [
    provideIcons({
      heroArrowTopRightOnSquare,
    }),
  ],
})
export class PortailAE {
  protected readonly INSTAFEED = INSTAFEED;
  protected readonly HERO_IMAGE =
    'https://api.tipeee.com/uploads/media/image/png/20230614/202306146489a749132a8.png';
}
