import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListasService } from '../services/list-service/listas.service';
import { HeaderGrocerlistComponent } from '../header-grocerlist/header-grocerlist.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { CommonModule } from '@angular/common';
import { List } from '../models/list';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HeaderGrocerlistComponent, SideMenuComponent, CommonModule, HttpClientModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  list: any;
  
  /**
   *
   */
  constructor(private listService: ListasService) {
  }

  productos: any;

  ngOnInit(): void {
    this.list = history.state.lista;
    this.listService.getProducts(this.list).subscribe(
      p => {
        console.log(p);
        this.productos = p;
      }
    );
  }




}
