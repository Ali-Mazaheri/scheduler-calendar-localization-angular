// Shim the environment
import 'core-js/client/shim';

// Angular requires Zones to be pre-configured in the environment
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './Scripts/app.module';
platformBrowserDynamic().bootstrapModule(AppModule);