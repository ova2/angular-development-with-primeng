// Webpack creates a link to the main.css and put it into the index.html
import './assets/css/main.scss';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule}  from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
