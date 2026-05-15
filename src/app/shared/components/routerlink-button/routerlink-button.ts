import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-routerlink-button',
  imports: [RouterLink],
  templateUrl: './routerlink-button.html',
  styleUrl: './routerlink-button.scss',
})
export class RouterlinkButton {
  public readonly url = input.required<string>();
  public readonly text = input.required<string>();

  public readonly isError = input<string>();
  public readonly isNeutral = input<string>();

  public readonly btnType = input<string>();
}
