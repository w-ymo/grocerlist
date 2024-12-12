import { Component, inject, Input } from '@angular/core';
import { HeaderGrocerlistComponent } from '../header-grocerlist/header-grocerlist.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { CommonModule } from '@angular/common';
import { ListasService } from '../services/list-service/listas.service';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user-service/user.service';
import { LoginService } from '../services/login-service/login.service';
import { User } from '../models/user';
import { MatMenuModule } from '@angular/material/menu';
import { List } from '../models/list';
import { error } from 'node:console';
import { MatDialog } from '@angular/material/dialog';
import { ShareListComponent } from '../share-list/share-list.component';

@Component({
  selector: 'app-list-of-list',
  standalone: true,
  imports: [HeaderGrocerlistComponent, SideMenuComponent, CommonModule, RouterLink, MatMenuModule],
  templateUrl: './list-of-list.component.html',
  styleUrl: './list-of-list.component.scss'
})
export class ListOfListComponent {

  userLoginOn: boolean = false;
  username: string | null;

  errorMessage: String = "";

  user: User;

  constructor(private loginService: LoginService, private listService: ListasService, private userService: UserService, private router: Router, private dialog: MatDialog) { }

  listsAdded: List[];
  listsCreated: List[];

  openAddList(): void {
    console.log(this.user)
    this.listService.insertList({
      idLista: 0,
      nombreLista: "Nueva lista",
      usuarioCreador: this.user
    }).subscribe({
      next: (data) => {
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
    if (this.listsCreated.findIndex(lista => lista.idLista === idLista) != -1) {
      sessionStorage.removeItem("currentListPropetary");
      sessionStorage.setItem("currentListPropetary", 'true');
    }
    this.router.navigateByUrl('/list');
  }

  deleteList(list: List) {
    this.listService.deleteList(list.idLista).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        this.errorMessage = error;
      },
      complete: () => {
        console.info("Lista eliminada");
        this.getLists();
      }
    });
  }

  shareList(list: List) {
    sessionStorage.removeItem("currentList");
    sessionStorage.setItem("currentList", list.idLista as unknown as string);
    this.dialog.open(ShareListComponent);
  }

  getListAdded() {
    this.listService.getListasAdded(this.username as string).subscribe({
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
  }

  getListCreated() {
    this.listService.getListasCreated(this.username as string).subscribe({
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

  getLists() {
    this.getListAdded();
    this.getListCreated();
  }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;

        this.username = sessionStorage.getItem("username");

        this.userService.getUserByUsername(this.username as string).subscribe({
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

          this.getLists();

        } else {
          this.router.navigateByUrl('');
        }
      }
    });

  }

}
