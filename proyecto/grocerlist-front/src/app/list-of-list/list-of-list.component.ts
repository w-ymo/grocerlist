import { Component, inject, Input } from '@angular/core';
import { HeaderGrocerlistComponent } from '../header-grocerlist/header-grocerlist.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { CommonModule } from '@angular/common';
import { ListasService } from '../services/list-service/listas.service';
import { User } from '../models/user';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-of-list',
  standalone: true,
  imports: [HeaderGrocerlistComponent, SideMenuComponent, CommonModule, HttpClientModule, RouterLink],
  templateUrl: './list-of-list.component.html',
  styleUrl: './list-of-list.component.scss',
})
export class ListOfListComponent {

  @Input() user: User = new User();

  httpClient = inject(HttpClient);

  listService = new ListasService(this.httpClient);

  constructor(){ }

  listsAdded:any;
  listsCreated:any;

  ngOnInit(): void {
    //Aqui recibiria el usuario que ha iniciado sesion
    this.user.nombreUsuario = "des-prueba";
    this.listService.getListasAdded(this.user).subscribe(
      l => {
        this.listsAdded = l;
        console.log('añadidas');
        console.log(l);
      }
    );

    this.listService.getListasCreated(this.user).subscribe(
      l => {
        this.listsCreated = l;
        console.log('creadas');
        console.log(l);
      }
    );

  }
  
}
