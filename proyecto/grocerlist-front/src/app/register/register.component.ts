import { Component } from '@angular/core';
import { HeaderGrocerlistComponent } from '../header-grocerlist/header-grocerlist.component';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../services/login-service/login.service';
import { RegisterRequest } from '../models/registerReq';
import { passwordMatchingValidatior } from '../validators/passwordMatchingValidator';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderGrocerlistComponent, RouterLink, ReactiveFormsModule, NgIf, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerError:string="";
  registerForm=this.formBuilder.group({
    username:['',[Validators.required]],
    email: ['', [Validators.required]],
    password: ['',[Validators.required]],
    passwordRe: ['', [Validators.required]]
  }, {validators: passwordMatchingValidatior})

  constructor(private formBuilder:FormBuilder, private router:Router, private loginService: LoginService) { }

  get email(){
    return this.registerForm.controls.email;
  }

  get username()
  {
    return this.registerForm.controls.username;
  }

  get password()
  {
    return this.registerForm.controls.password;
  }

  get passwordRe()
  {
    return this.registerForm.controls.passwordRe;
  }

  register(){
    if(this.registerForm.valid){
      this.registerError="";
      this.loginService.register(this.registerForm.value as RegisterRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          this.registerError=errorData;
        },
        complete: () => {
          this.router.navigateByUrl('/list-of-list');
          this.registerForm.reset();
        }
      })

    }
    else{
      this.registerForm.markAllAsTouched();
      alert("Error al ingresar los datos.");
    }
  }

  ngOnInit(): void {
    var currEmail = sessionStorage.getItem('email');
    console.log(currEmail);
    if(currEmail != ''){
      this.registerForm.controls.email.setValue(currEmail);
    }
  }

}
