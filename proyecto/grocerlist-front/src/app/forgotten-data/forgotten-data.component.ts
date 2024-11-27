import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from 'express';
import { LoginService } from '../services/login-service/login.service';

@Component({
  selector: 'app-forgotten-data',
  standalone: true,
  imports: [],
  templateUrl: './forgotten-data.component.html',
  styleUrl: './forgotten-data.component.scss'
})
export class ForgottenDataComponent {

  existeEmail: boolean;

  forgetError:string="";
  forgetForm=this.formBuilder.group({
    email: ['', [Validators.required]]
  });

  constructor(private formBuilder:FormBuilder, private router:Router, private loginService: LoginService) { }

  get email(){
    return this.forgetForm.controls.email;
  }

  forget(){
    if(this.forgetForm.valid){
      this.forgetError="";
      this.loginService.forget(this.forgetForm.value as ForgetRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          this.forgetError=errorData;
        },
        complete: () => {
          this.router.navigateByUrl('/list-of-list');
          this.forgetForm.reset();
        }
      })

    }
    else{
      this.forgetForm.markAllAsTouched();
      alert("Error al ingresar los datos.");
    }
  }
}
