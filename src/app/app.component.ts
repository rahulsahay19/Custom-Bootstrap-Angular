import { Component, OnInit } from '@angular/core';
//import { RunApplication } from '../main';
import { APIService, ApiConfig } from './api-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[APIService]
  
})
export class AppComponent implements OnInit {
  apiUrl = "https://some-internal-api-call-to-get-the-modules";
  apiToken = "SOME_SERVER_PROVIDED_TOKEN";

  constructor(private apiService: APIService) {}
  ngOnInit() {
   // RunApplication(this.apiUrl,this.apiToken);
  }
  title = 'app';
}
