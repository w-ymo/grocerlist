import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Categoria } from '../../models/categoria';
import { enviroment } from '../../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpClient: HttpClient) { }

  getByName(nombre: string):Observable<Categoria>{
    return this.httpClient.get<Categoria>(enviroment.apiURL + 'api/categoria/porNombre/' + nombre).pipe(
      catchError(this.handleError)
    );
  }

  getCategorias(): Observable<Categoria[]>{
    return this.httpClient.get<Categoria[]>(enviroment.apiURL + 'api/categoria/all').pipe(
      catchError(this.handleError)
    );
  }

  insertCategoria(categoria: Categoria): Observable<Categoria>{
    return this.httpClient.post<Categoria>(enviroment.apiURL + 'api/categoria/insert', categoria).pipe(
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
