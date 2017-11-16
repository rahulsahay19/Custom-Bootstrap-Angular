import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { APIService, ApiConfig } from './api-service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  // providers:[APIService,ApiConfig],
  providers: [{provide: "api.config", useFactory: () => window['appdata']}],
  bootstrap: [AppComponent]
})
export class AppModule { }
