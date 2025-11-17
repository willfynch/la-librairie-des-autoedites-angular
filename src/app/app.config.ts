import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
  heroBookmark,
} from '@ng-icons/heroicons/outline';
import {
  bootstrapInstagram,
  bootstrapSubstack,
  bootstrapThreads,
} from '@ng-icons/bootstrap-icons';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideIcons({
      heroBookmark,
      bootstrapInstagram,
      bootstrapSubstack,
      bootstrapThreads,
    }),
  ]
};
