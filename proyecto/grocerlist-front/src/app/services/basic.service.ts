import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroment/enviroment';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicService {
  constructor() { }

  protected handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producio un error ', error);
    }
    else{
      console.error('Backend retornó el código de estado ', error.status, error.error);
    }
    return throwError(()=> new Error('Algo falló. Por favor intente nuevamente.'));
  }
}
