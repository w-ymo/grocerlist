import { Component } from '@angular/core';
import { HeaderGrocerlistComponent } from '../header-grocerlist/header-grocerlist.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { CommonModule } from '@angular/common';
import { ListasService } from '../services/list-service/listas.service';

@Component({
  selector: 'app-list-of-list',
  standalone: true,
  imports: [HeaderGrocerlistComponent, SideMenuComponent, CommonModule],
  templateUrl: './list-of-list.component.html',
  styleUrl: './list-of-list.component.scss',
})
export class ListOfListComponent {

  lists:any;
  private listService = new ListasService();

  ngOnInit(): void {
    //Aqui recibiria el usuario que ha iniciado sesion
    this.lists = this.listService.getListas();
  }
  
}
