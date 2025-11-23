import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';
import { InstacardComponent } from '../instacard/instacard';
import { PartnerInstaFeed } from '../../../domain/types/partners.entities';

@Component({
  selector: 'app-instafeed',
  standalone: true,
  imports: [CommonModule, NgIconComponent, InstacardComponent],
  templateUrl: './instafeed.html',
  styleUrls: ['./instafeed.scss'],
})
export class InstafeedComponent {
  instafeed = input.required<PartnerInstaFeed>();
}
