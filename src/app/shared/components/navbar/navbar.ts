import { Component, inject, signal, HostListener, PLATFORM_ID, afterNextRender } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NAVBAR_ITEMS, URLS_CONSTANTS, ACTIVE_CLASS } from '../../../utils/constants';
import { NavBarItemModel } from '../../types/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
})
export class Navbar {
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  // Navigation items
  protected readonly navbarItems = NAVBAR_ITEMS;
  protected readonly submitBookUrl = URLS_CONSTANTS.BOOK_SUBMISSION_FORM;

  // Track current path
  private readonly _currentPath = signal<string>('');

  // Track navbar transparency state
  protected readonly isTransparent = signal<boolean>(false);

  @HostListener('window:scroll')
  onScroll() {
    if (!isPlatformBrowser(this.platformId)) return;

    const hero = document.querySelector('.hero') as HTMLElement;
    if (hero) {
      const heroHeight = hero.offsetHeight/2;
      const navbarHeight = 64; // Approximate navbar height
      this.isTransparent.set(window.scrollY < heroHeight - navbarHeight);
    } else {
      this.isTransparent.set(false);
    }
  }

  constructor() {
    // Initialize with current URL
    this._currentPath.set(this.router.url);

    // Subscribe to route changes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this._currentPath.set(event.urlAfterRedirects);
        // Re-check transparency on route change
        setTimeout(() => this.onScroll(), 0);
      });

    // Check initial transparency state after render
    afterNextRender(() => {
      this.onScroll();
    });
  }

  isPathActive(item: NavBarItemModel): boolean {
    const path = this._currentPath();

    // Home route check
    if (path === '/' && item.value === '') {
      return true;
    }

    // Check if the first segment of the path matches the item value
    const firstSegment = path.split('/')[1];
    return firstSegment === item.value;
  }
}
