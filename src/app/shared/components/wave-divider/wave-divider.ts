import { Component, input } from '@angular/core';

@Component({
  selector: 'app-wave-divider',
  standalone: true,
  templateUrl: './wave-divider.html',
  styleUrls: ['./wave-divider.scss'],
})
export class WaveDivider {
  public readonly fillValue = input.required<string>();
}
