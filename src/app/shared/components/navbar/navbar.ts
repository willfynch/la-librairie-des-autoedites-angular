import { Component, inject, signal } from '@angular/core';
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

  // Navigation items
  protected readonly navbarItems = NAVBAR_ITEMS;
  protected readonly submitBookUrl = URLS_CONSTANTS.BOOK_SUBMISSION_FORM;

  // Track current path
  private _currentPath = signal<string>('');

  constructor() {
    // Initialize with current URL
    this._currentPath.set(this.router.url);

    // Subscribe to route changes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this._currentPath.set(event.urlAfterRedirects);
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
