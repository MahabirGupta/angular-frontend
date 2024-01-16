// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Import your AppModule

enableProdMode();


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

