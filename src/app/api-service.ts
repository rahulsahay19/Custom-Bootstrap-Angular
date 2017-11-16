import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class APIService {
    constructor(
        @Inject("api.config") private apiConfig: ApiConfig
    ) {
        console.log("Injected config:", this.apiConfig);
    }
    
}

export class ApiConfig {
    apiUrl: string;
    apiToken: string;
}
