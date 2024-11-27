import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Categoria } from '../../models/categoria';
import { enviroment } from '../../../enviroment/enviroment';
import { BasicService } from '../basic.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends BasicService {

  constructor(private httpClient: HttpClient) { 
    super();
  }

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

}
