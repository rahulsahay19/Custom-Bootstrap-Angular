import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ApiConfig } from './app/api-service';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));

// let apiConfig = new ApiConfig();
// apiConfig.apiUrl = 'http://something.com';
// apiConfig.apiToken = 'apiToken';

// platformBrowserDynamic().bootstrapModule(AppModule, [
//   //  provide("api.config", {useValue: apiConfig})
//   { providers:[{provide:'api.config',useValue:apiConfig}]}
// ]);  
RunApplication('http://something.com','apiToken')
export function RunApplication(apiUrl: string, apiToken: string) {
  
      // Create our API config provider using the external data
      //
      let apiConfig = new ApiConfig();
      apiConfig.apiUrl = apiUrl;
      apiConfig.apiToken = apiToken;
      
      // Now we can call bootstrap, but we have the API config object
      //  set up as well. Just create is as an injectable token here
      //  so other components/services can consume it.
      //
      platformBrowserDynamic().bootstrapModule(AppModule, [
        //  provide("api.config", {useValue: apiConfig})
        { providers:[{provide:'api.config',useValue:apiConfig}]}
      ]); 
  }