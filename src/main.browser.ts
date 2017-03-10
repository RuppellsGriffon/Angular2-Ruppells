import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app';


export function bootstrapDomReady() {
  document.addEventListener('DOMContentLoaded', () => platformBrowserDynamic().bootstrapModule(AppModule) );
}

bootstrapDomReady();