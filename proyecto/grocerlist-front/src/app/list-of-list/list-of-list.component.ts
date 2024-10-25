import { Component } from '@angular/core';
import { HeaderGrocerlistComponent } from '../header-grocerlist/header-grocerlist.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-list-of-list',
  standalone: true,
  imports: [HeaderGrocerlistComponent, SideMenuComponent],
  templateUrl: './list-of-list.component.html',
  styleUrl: './list-of-list.component.scss',
})
export class ListOfListComponent {

}
