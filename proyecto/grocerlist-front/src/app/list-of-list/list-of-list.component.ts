import { Component, inject, Input } from '@angular/core';
import { HeaderGrocerlistComponent } from '../header-grocerlist/header-grocerlist.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { CommonModule } from '@angular/common';
import { ListasService } from '../services/list-service/listas.service';
import { User } from '../models/user';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { error } from 'console';
import { UserService } from '../services/user-service/user.service';
import { enviroment } from '../../enviroment/enviroment';
import { LoginService } from '../services/login-service/login.service';
import { JwtInterceptorService } from '../services/jwt-interceptor-service/jwt-interceptor.service';
import { ErrorInterceptorService } from '../services/error-interceptor-service/error-interceptor.service';

@Component({
  selector: 'app-list-of-list',
  standalone: true,
  imports: [HeaderGrocerlistComponent, SideMenuComponent, CommonModule, HttpClientModule, RouterLink],
  templateUrl: './list-of-list.component.html',
  styleUrl: './list-of-list.component.scss'
})
export class ListOfListComponent {

  userLoginOn: boolean = false;

  errorMessage: String = "";

  constructor(private loginService: LoginService, private listService: ListasService, private userService: UserService){ }

  listsAdded:any;
  listsCreated:any;

  openAddList():void{
    console.log('antonio');
  }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
        this.listService.getListasAdded(1).subscribe({
          next: (l) => {
            console.log(l);
            this.listsAdded = l;
          },
          error: (error) => {
            this.errorMessage = error;
          },
          complete: () => {
            console.info("Listas ok");
          }
        });
      }
    });

    

    // this.listService.getListasCreated(1).subscribe(
    //   l => {
    //     this.listsCreated = l;
    //   }
    // );

  }
  
}
