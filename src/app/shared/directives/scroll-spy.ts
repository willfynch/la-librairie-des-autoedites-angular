import { Directive, signal } from '@angular/core';

@Directive({
  selector: '[appScrollSpy]',
  host: {
    '[attr.value]': 'scrollPercentage()',
    '(window:scroll)': 'onWindowScroll()',
  },
})
export class ScrollSpy {
  scrollPercentage = signal(0);

  onWindowScroll() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const scrollPercentage = (currentScroll / totalHeight) * 100;

    this.scrollPercentage.set(scrollPercentage);
  }
}
