import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';
import { InstaCard } from '../../types/models';

@Component({
  selector: 'app-instacard',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './instacard.html',
  styleUrls: ['./instacard.scss'],
})
export class InstacardComponent {
  card = input.required<InstaCard>();
}
