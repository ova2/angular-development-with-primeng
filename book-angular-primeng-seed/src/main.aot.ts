// Webpack creates a link to the main.css and put it into the index.html
import './assets/css/main.scss';

import {enableProdMode} from '@angular/core';
import {platformBrowser} from '@angular/platform-browser';
import {AppModuleNgFactory} from '../aot/src/app/app.module.ngfactory';

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
    .catch(err => console.error(err));
