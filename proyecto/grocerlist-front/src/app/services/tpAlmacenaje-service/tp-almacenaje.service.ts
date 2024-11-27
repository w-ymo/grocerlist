import { Injectable } from '@angular/core';
import { BasicService } from '../basic.service';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { TpAlmacenaje } from '../../models/tpAlmacenaje';
import { enviroment } from '../../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class TpAlmacenajeService extends BasicService {

  constructor(private httpClient: HttpClient) { 
    super();
  }

  getAll(): Observable<TpAlmacenaje[]>{
    return this.httpClient.get<TpAlmacenaje[]>(enviroment.apiURL + 'api/almacenaje/all').pipe(
      catchError(this.handleError)
    );
  }

}
