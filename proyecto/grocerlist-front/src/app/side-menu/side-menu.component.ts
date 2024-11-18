import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../services/login-service/login.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
    @Input() visible: boolean = false;

    @Output() toggleActiveEvent = new EventEmitter<boolean>();

    /**
     *
     */
    constructor(private loginService: LoginService, private router: Router) {
    }

    toggleMenu(){
      this.visible = !this.visible;
      this.toggleActiveEvent.emit(this.visible);
    }

    logout(){
      this.loginService.logout();
      this.router.navigateByUrl('/');
    }

}
