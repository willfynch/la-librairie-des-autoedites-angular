import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
  heroBookmark,
  heroArrowTopRightOnSquare
} from '@ng-icons/heroicons/outline';
import {
  bootstrapSubstack,
} from '@ng-icons/bootstrap-icons';
import { faBrandInstagram, faBrandThreads} from '@ng-icons/font-awesome/brands';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { BlogGateway } from './blog/domain/ports/blog.gateway';
import { InMemoryBlogArticlesGateway } from './blog/infrastructure/in-memory-blog-gateway';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    { provide: BlogGateway, useClass: InMemoryBlogArticlesGateway },
    provideIcons({
      heroBookmark,
      bootstrapSubstack,
      faBrandThreads,
      heroArrowTopRightOnSquare,
      faBrandInstagram
    }),
  ]
};
