import { Component, inject, Input } from '@angular/core';
import { HeaderGrocerlistComponent } from '../header-grocerlist/header-grocerlist.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { CommonModule } from '@angular/common';
import { ListasService } from '../services/list-service/listas.service';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user-service/user.service';
import { LoginService } from '../services/login-service/login.service';
import { User } from '../models/user';

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

  user: User;

  constructor(private loginService: LoginService, private listService: ListasService, private userService: UserService, private router: Router) { }

  listsAdded: any;
  listsCreated: any;

  openAddList(): void {
    this.listService.insertList({
      idLista: 0,
      nombreLista: "Nueva lista",
      usuarioCreador: this.user
    }).subscribe({
      next: (data) => {
        console.log('INSERTOOOOOOO');
        console.log(data);
        sessionStorage.removeItem("currentList");
        sessionStorage.setItem("currentList", data.idLista as unknown as string);
        this.router.navigateByUrl('/list');
      }
    });
  }

  openList(idLista: number) {
    sessionStorage.removeItem("currentList");
    sessionStorage.setItem("currentList", idLista as unknown as string);
    this.router.navigateByUrl('/list');
  }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;

        var username: string | null = sessionStorage.getItem("username");

        this.userService.getUserByUsername(username as string).subscribe({
          next: (user) => {
            this.user = user;
          },
          error: (error) => {
            this.errorMessage = error;
          },
          complete: () => {
            console.info("Usuario recuperado");
          }
        });

        if (this.userLoginOn) {

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
      }
    });

  }

}
