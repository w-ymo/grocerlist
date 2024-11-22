import { Injectable } from '@angular/core';
import { BasicService } from '../basic.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { enviroment } from '../../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BasicService{

  constructor(private http: HttpClient) { 
    super();
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(enviroment.apiURL + 'api/usuarios/id/' + userId);
  }

  getUserByUsername(username: String): Observable<User> {
    return this.http.get<User>(enviroment.apiURL + 'api/usuarios/username/' + username);
  }

  updateById(user: User, id: number): Observable<String> {
    return this.http.put<String>(enviroment.apiURL + 'api/usuarios/actualizar/' + id, user);
  }

}
