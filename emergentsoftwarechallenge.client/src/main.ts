import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


//App.enableCors({
//      origin: "*",
//      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//      preflightContinue: false, optionsSuccessStatus: 204 
//})
