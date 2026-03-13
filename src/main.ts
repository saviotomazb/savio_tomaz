import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .then(() => {
    const splash = document.getElementById('app-splash');

    splash?.classList.add(
      'opacity-0',
      'transition-opacity',
      'duration-500'
    );

    setTimeout(() => splash?.remove(), 500);
  })
  .catch((err) => console.error(err));