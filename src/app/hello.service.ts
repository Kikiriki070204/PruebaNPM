import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hola } from './hola';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(protected http: HttpClient) { }

  saludo(): Observable<Hola>
  {
    return this.http.get<Hola>('/api/hello')
  }
}
