import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { order } from './models/Order';
import { address } from './models/Address';
import { orderItem } from './models/OrderItem';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:<port>';
  // getOrders(): Observable<order[]>{
  //   return of
  // }
}
