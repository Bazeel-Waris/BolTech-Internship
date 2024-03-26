// import {  platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { AppComponent } from './app/app.component';
// import { bootstrapApplication } from '@angular/platform-browser';

// bootstrapApplication(AppComponent); // Bootstrap your application with the AppComponent
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';


bootstrapApplication(AppComponent,
     {
          providers: [
               provideProtractorTestingSupport(),
               provideRouter(routeConfig)
          ]
     }
     ).catch(err => console.error(err));