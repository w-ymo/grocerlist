import { Injectable } from '@angular/core';
import { ProductoLosPrecios } from '../../models/productoLosPrecios';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { enviroment } from '../../../enviroment/enviroment';
import { Product } from '../../models/product';
import { BasicService } from '../basic.service';
import { FilterProduct } from '../../models/filterProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BasicService {

  constructor(private httpClient: HttpClient) { 
    super();
  }

  getFromLosPrecios(id: number): Observable<ProductoLosPrecios>{
    return this.httpClient.get<ProductoLosPrecios>('https://losprecios.co/producto/detalles?ID='+ id +'&ClaveAPI=ne48naahUK24vb49').pipe(
      catchError(this.handleError)
    );
  }
  
  insertProducto(producto: Product): Observable<Product>{
    return this.httpClient.post<Product>(enviroment.apiURL + 'api/productos/insert', producto).pipe(
      catchError(this.handleError)
    );
  }

  getByFilter(filter: FilterProduct): Observable<Product[]>{
    return this.httpClient.post<Product[]>(enviroment.apiURL + 'api/productos/filter', filter).pipe(
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
