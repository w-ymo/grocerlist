import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Incluye } from '../../models/incluye';
import { catchError, Observable, throwError } from 'rxjs';
import { enviroment } from '../../../enviroment/enviroment';
import { Product } from '../../models/product';
import { IncluyeAdded } from '../../models/incluyeAdded';

@Injectable({
  providedIn: 'root'
})
export class IncluyeService {

  constructor(private http: HttpClient) { }

  getAllProducts(req: IncluyeAdded): Observable<Incluye[]> {
    return this.http.post<Incluye[]>(enviroment.apiURL + 'api/incluye/obtener', req).pipe(
      catchError(this.handleError)
    );
  }

  updateIncluye(req: Incluye): Observable<Incluye>{
    return this.http.put<Incluye>(enviroment.apiURL + 'api/incluye/actualizar/' + req.idLista + '/' + req.idProducto, req).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producio un error ', error);
    }
    else{
      console.error('Backend retornó el código de estado ', error.status, error.error);
    }
    return throwError(()=> new Error('Algo falló. Por favor intente nuevamente.'));
  }

}
