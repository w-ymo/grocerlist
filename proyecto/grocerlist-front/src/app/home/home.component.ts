import { Component } from '@angular/core';
import { HeaderGrocerlistComponent } from '../header-grocerlist/header-grocerlist.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderGrocerlistComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  registerForm = this.formBuilder.group({
    email: ['']
  });

  get email(){
    return this.registerForm.controls.email;
  }

  constructor(private formBuilder: FormBuilder, private router: Router){
  }

  goToRegister(){
    sessionStorage.setItem("email",this.email.value as string);
    this.router.navigateByUrl('/register')
  }
}
