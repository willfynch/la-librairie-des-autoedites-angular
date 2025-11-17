import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NAVBAR_ITEMS, URLS_CONSTANTS, ACTIVE_CLASS } from '../../../utils/constants';
import { NavBarItemModel } from '../../types/models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
})
export class Navbar {
  private router = inject(Router);

  // Navigation items
  protected readonly navbarItems = NAVBAR_ITEMS;
  protected readonly submitBookUrl = URLS_CONSTANTS.BOOK_SUBMISSION_FORM;
  protected readonly ACTIVE_CLASS = ACTIVE_CLASS;

  // Track current path
  private currentPath = signal<string>('');

  constructor() {
    // Initialize with current URL
    this.currentPath.set(this.router.url);

    // Subscribe to route changes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentPath.set(event.urlAfterRedirects);
      });
  }

  isPathActive(item: NavBarItemModel): boolean {
    const path = this.currentPath();

    // Home route check
    if (path === '/' && item.value === '') {
      return true;
    }

    // Check if the first segment of the path matches the item value
    const firstSegment = path.split('/')[1];
    return firstSegment === item.value;
  }
}
