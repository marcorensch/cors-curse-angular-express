import {Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

interface User {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userSignal = signal<User | null>(null);

  uri = 'http://localhost:3000';

  headerConfiguration = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  }

  constructor(private http: HttpClient) { }

  get isLoggedIn() {
    return this._userSignal;
  }
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.uri + '/login', {username, password}, this.headerConfiguration).pipe(
      tap((data: any) => {
        this._userSignal.set(data.user);
      })
    );
  }

  logout(): Observable<any> {
    const res = this.http.post(this.uri + '/logout', {}, this.headerConfiguration);
    res.subscribe(() => {
      this._userSignal.set(null);
    });
    return res;
  }
}
