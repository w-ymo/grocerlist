import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Incluye, IncluyeProduct } from '../../models/incluye';
import { catchError, Observable, throwError } from 'rxjs';
import { enviroment } from '../../../enviroment/enviroment';
import { Product } from '../../models/product';
import { IncluyeAdded } from '../../models/incluyeAdded';
import { BasicService } from '../basic.service';

@Injectable({
  providedIn: 'root'
})
export class IncluyeService extends BasicService{

  constructor(private http: HttpClient) { 
    super();
  }

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

  insertProduct(incluye: IncluyeProduct): Observable<Incluye>{
    return this.http.post<Incluye>(enviroment.apiURL + 'api/incluye/insertProduct', incluye).pipe(
      catchError(this.handleError)
    );
  }

  deleteIncluye(idLista: number, idProducto: number):Observable<boolean>{
    return this.http.delete<boolean>(enviroment.apiURL + 'api/incluye/delete/'+idLista+'/'+idProducto).pipe(
      catchError(this.handleError)
    );
  }
}
