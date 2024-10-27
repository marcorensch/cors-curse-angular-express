import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  uri = 'http://localhost:3000';

  headerConfiguration = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  }

  constructor(private http: HttpClient) { }


  get(path: string) {
    return this.http.get(this.uri + path, this.headerConfiguration);
  }


}
