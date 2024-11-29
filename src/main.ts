import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
