import { Component } from '@angular/core';
import { HeaderGrocerlistComponent } from '../header-grocerlist/header-grocerlist.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-of-list',
  standalone: true,
  imports: [HeaderGrocerlistComponent, SideMenuComponent, CommonModule],
  templateUrl: './list-of-list.component.html',
  styleUrl: './list-of-list.component.scss',
})
export class ListOfListComponent {

  lists = ['antonio', 'fernando'];
  
}
