import {HttpClient, HttpHeaders} from '@angular/common/http' ;
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { canchas } from '../canchas';

@Injectable({
  providedIn: 'root'
})
export class AplicacionService {
  private HttpOptions = {
    headers:new HttpHeaders({
        "Content-Type": "canchas/json"
    })
  }

  constructor(private http: HttpClient){}
  
}
