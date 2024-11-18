import { Component, inject, Input } from '@angular/core';
import { HeaderGrocerlistComponent } from '../header-grocerlist/header-grocerlist.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { CommonModule } from '@angular/common';
import { ListasService } from '../services/list-service/listas.service';
import { RouterLink } from '@angular/router';
import { UserService } from '../services/user-service/user.service';
import { LoginService } from '../services/login-service/login.service';

@Component({
  selector: 'app-list-of-list',
  standalone: true,
  imports: [HeaderGrocerlistComponent, SideMenuComponent, CommonModule, RouterLink],
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

        var username: string | null = sessionStorage.getItem("username");

        this.listService.getListasAdded(username as string).subscribe({
          next: (l) => {
            this.listsAdded = l;
          },
          error: (error) => {
            this.errorMessage = error;
          },
          complete: () => {
            console.info("Listas aniadidas ok");
          }
        });

        this.listService.getListasCreated(username as string).subscribe({
          next: (l) => {
            this.listsCreated = l;
          },
          error: (error) => {
            this.errorMessage = error;
          },
          complete: () => {
            console.info("Listas creadas ok");
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
