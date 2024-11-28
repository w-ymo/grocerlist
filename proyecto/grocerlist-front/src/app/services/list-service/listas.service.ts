import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { appConfig, baseURI } from '../../app.config';
import { catchError, Observable, throwError } from 'rxjs';
import { List, ShareList } from '../../models/list';
import { BasicService } from '../basic.service';
import { Product } from '../../models/product';
import { enviroment } from '../../../enviroment/enviroment';
import { Incluye } from '../../models/incluye';

@Injectable({
  providedIn: 'root'
})
export class ListasService extends BasicService{
  lists:any;

  constructor(private http: HttpClient) { 
    super();
  }

  getListasAdded(username: string): Observable<List[]> {
    return this.http.get<List[]>(enviroment.apiURL + 'api/listas/obtener/seguidas/' + username).pipe(
      catchError(this.handleError)
    );
  }

  getListasCreated(username: string): Observable<List[]> {
    return this.http.get<List[]>(enviroment.apiURL + 'api/listas/obtener/creadas/' + username).pipe(
      catchError(this.handleError)
    );
  }

  insertList(list: List): Observable<List>{
    this.lists = this.http.post<List>(enviroment.apiURL + 'api/listas/insertarLista', list).pipe(
      catchError(this.handleError)
    );
    return this.lists;
  }

  getById(id: number): Observable<List>{
    return this.http.get<List>(enviroment.apiURL + 'api/listas/obtener/' + id).pipe(
      catchError(this.handleError)
    );
  }

  updateById(list: List): Observable<List>{
    return this.http.put<List>(enviroment.apiURL + 'api/listas/actualizar/' + list.idLista, list).pipe(
      catchError(this.handleError)
    );
  }

  deleteList(idList: number): Observable<boolean>{
    return this.http.delete<boolean>(enviroment.apiURL + 'api/listas/delete/' + idList).pipe(
      catchError(this.handleError)
    );
  }

  shareList(request: ShareList): Observable<List>{
    return this.http.post<List>(enviroment.apiURL + 'api/listas/share', request).pipe(
      catchError(this.handleError)
    );
  }
}
