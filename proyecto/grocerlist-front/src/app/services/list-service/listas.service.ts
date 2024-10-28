import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  constructor() { }

  getListas():any{
    return ['awiki', 'antonio'];
  }
}
