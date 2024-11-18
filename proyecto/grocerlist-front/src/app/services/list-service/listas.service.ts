import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { appConfig, baseURI } from '../../app.config';
import { Observable, throwError } from 'rxjs';
import { List } from '../../models/list';
import { BasicService } from '../basic.service';
import { Product } from '../../models/product';
import { enviroment } from '../../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ListasService extends BasicService{
  lists:any;

  constructor(private http: HttpClient) { 
    super();
  }

  getListasAdded(id: number): Observable<List> {
    return this.http.get<List>(enviroment.apiURL + 'listas/obtener/seguidas/' + id);
  }

  getListasCreated(id: number): Observable<List> {
    return this.http.get<List>(enviroment.apiURL + 'listas/obtener/creadas/' + id);
  }

  getProducts(list: List): Observable<Product> {
    return this.http.get<Product>(enviroment.apiURL + 'listas/obtenerProductos/' + list.idLista);
  }

  insertList(list: List): boolean{
    this.lists = this.http.post<List>(enviroment.apiURL + 'listas/insertarLista', list);
    console.log(this.lists);
    return this.lists;
  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producio un error ', error.error);
    }
    else{
      console.error('Backend retornó el código de estado ', error.status, error.error);
    }
    return throwError(()=> new Error('Algo falló. Por favor intente nuevamente.'));
  }


}
