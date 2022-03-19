import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  private baseUrl = 'https://localhost:7083/api/';

  get<T>(path: string): Observable<T[]> {
    const url = this.baseUrl + path;
    console.log('sending requiest to ' + url);
    return this.http.get<T[]>(url);
  }
}
