import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';
import { PartnerInstaCard } from '../../../domain/types/partners.entities';

@Component({
  selector: 'app-instacard',
  imports: [CommonModule, NgIconComponent],
  templateUrl: './instacard.html',
  styleUrls: ['./instacard.scss'],
})
export class InstacardComponent {
  card = input.required<PartnerInstaCard>();
}
