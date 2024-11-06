import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { appConfig, baseURI } from '../../app.config';
import { Observable } from 'rxjs';
import { List } from '../../models/list';
import { BasicService } from '../basic.service';

@Injectable({
  providedIn: 'root'
})
export class ListasService extends BasicService{

  private apiUrl = baseURI + '/listas';

  constructor(private http: HttpClient) { 
    super();
  }

  getListasAdded(user: User): Observable<List> {
    return this.http.get<List>(this.apiUrl + '/obtener/seguidas/' + user.nombreUsuario, {headers: this.headers})
  }

  getListasCreated(user: User): Observable<List> {
    return this.http.get<List>(this.apiUrl + '/obtener/creadas/' + user.nombreUsuario, {headers: this.headers})
  }


}
