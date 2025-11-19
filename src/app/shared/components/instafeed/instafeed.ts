import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { InstacardComponent } from '../instacard/instacard';
import { InstaFeed } from '../../types/models';

@Component({
  selector: 'app-instafeed',
  standalone: true,
  imports: [CommonModule, NgIconComponent, InstacardComponent],
  templateUrl: './instafeed.html',
  styleUrls: ['./instafeed.scss'],
})
export class InstafeedComponent {
  instafeed = input.required<InstaFeed>();
}
