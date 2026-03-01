import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  TitleStrategy
} from '@angular/router';

import { routes } from './app.routes';
import { AppTitleStrategy } from './core/strategies/app-title.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation()
    ),

    {
      provide: TitleStrategy,
      useClass: AppTitleStrategy
    }
  ]
};