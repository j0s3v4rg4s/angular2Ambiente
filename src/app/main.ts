import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppComponent} from './app.component';

declare var ENV: string;

if (ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent);
