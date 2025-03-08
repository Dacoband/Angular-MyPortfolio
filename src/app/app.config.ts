import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(
            routes,
            withInMemoryScrolling({
                scrollPositionRestoration: "top",
            })
        ),
        importProvidersFrom([BrowserAnimationsModule]),
        provideHttpClient(),
        // {
            // provide: RECAPTCHA_V3_SITE_KEY,
            // useValue: environment.RE_CAPTCHA_V3,
        // },
    ]
};
