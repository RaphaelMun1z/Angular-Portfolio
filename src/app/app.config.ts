import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        provideZoneChangeDetection({ eventCoalescing: true }), 
        provideRouter(routes), 
        provideClientHydration(), 
        provideAnimationsAsync()
    ]
};