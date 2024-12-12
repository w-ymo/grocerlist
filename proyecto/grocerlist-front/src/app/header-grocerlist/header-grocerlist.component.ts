import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-header-grocerlist',
  standalone: true,
  imports: [CommonModule, RouterLink, SideMenuComponent],
  templateUrl: './header-grocerlist.component.html',
  styleUrl: './header-grocerlist.component.scss'
})

export class HeaderGrocerlistComponent {

  @Input() public menu: any = 0;

  public visible: boolean = false;

  toggleLateralMenu(){
    this.visible = !this.visible;
  }

  removeSession(){
    sessionStorage.removeItem('email');
  }
}

