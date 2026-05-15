import { Component, input } from '@angular/core';

@Component({
  selector: 'app-link-button',
  imports: [],
  templateUrl: './link-button.html',
  styleUrl: './link-button.scss',
})
export class LinkButton {

  public readonly url = input.required<string>();
  public readonly text = input.required<string>();

  public readonly isError = input<string>();
  public readonly isNeutral = input<string>();

  public readonly btnType = input<string>();

}
