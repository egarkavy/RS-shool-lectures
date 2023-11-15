import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { videosReducer } from './02-ngrx/data-access/videos.reducer';
import { VideosEffects } from './02-ngrx/data-access/videos.effects';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideStore(undefined, {runtimeChecks: { strictActionImmutability: true }}),
    provideState('videos', videosReducer),
    // provideState('user', userReducer),
    provideEffects(VideosEffects),
    provideStoreDevtools({})
  ]
};