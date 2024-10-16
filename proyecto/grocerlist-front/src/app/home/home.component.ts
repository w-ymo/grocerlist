import { Component } from '@angular/core';
import { HeaderGrocerlistComponent } from '../header-grocerlist/header-grocerlist.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderGrocerlistComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
    public email: String = "";

    constructor(){
      this.email = "";
    }
}
