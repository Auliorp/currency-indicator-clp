import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private apiUrl = 'https://mindicador.cl/api';

  constructor(private http: HttpClient) { }

  getCurrencyIndicator(): Observable<Object>{
    return this.http.get<any>(this.apiUrl)
  }
}
