import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-grocerlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header-grocerlist.component.html',
  styleUrl: './header-grocerlist.component.scss'
})

export class HeaderGrocerlistComponent {

  esHome: boolean = true;

  // constructor(esHome: boolean) {
  //   this.esHome = esHome;
  // }
  
}
