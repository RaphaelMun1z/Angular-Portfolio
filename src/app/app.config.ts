import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(withFetch()),
        provideAnimationsAsync(),
        provideAnimations(),
        provideZoneChangeDetection({ eventCoalescing: true }), 
        provideRouter(routes), 
        provideClientHydration(), 
        provideAnimationsAsync()
    ]
};
