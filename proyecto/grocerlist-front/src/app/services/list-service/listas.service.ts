import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { appConfig, baseURI } from '../../app.config';
import { Observable } from 'rxjs';
import { List } from '../../models/list';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  private apiUrl = baseURI + '/listas';
  private headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa('wymo:wymo')
   });

  constructor(private http: HttpClient) { 
  }

  getListas(user: User): Observable<List> {
    return this.http.get<List>(this.apiUrl + '/obtener/' + user.nombreUsuario, {headers: this.headers})
  }
}
