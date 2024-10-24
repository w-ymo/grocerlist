import { Component } from '@angular/core';
import { HeaderGrocerlistComponent } from '../header-grocerlist/header-grocerlist.component';
import { RouterLink, NavigationExtras, ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderGrocerlistComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private route: ActivatedRoute,
    private router: Router ) {
    
  }

  credentials = {username: '', password: ''};

  login(){
    this.router.navigate(['list-of-list']);
  }

}
