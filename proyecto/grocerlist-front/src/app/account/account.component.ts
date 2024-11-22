import { Component } from '@angular/core';
import { User } from '../models/user';
import { LoginService } from '../services/login-service/login.service';
import { UserService } from '../services/user-service/user.service';
import { HeaderGrocerlistComponent } from '../header-grocerlist/header-grocerlist.component';
import { FormBuilder, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [HeaderGrocerlistComponent, ReactiveFormsModule, FormsModule, NgIf, NgClass],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

  editUserForm=this.formBuilder.group({
    nombreUsuario:['',[Validators.required]],
    nombre:[''],
    apellido1: [''],
    apellido2: ['']
  });

  editError: string;

  get nombre(){
    return this.editUserForm.controls.nombre;
  }

  get nombreUsuario()
  {
    return this.editUserForm.controls.nombreUsuario;
  }

  get apellido1()
  {
    return this.editUserForm.controls.apellido1;
  }

  get apellido2()
  {
    return this.editUserForm.controls.apellido2;
  }

  constructor(private formBuilder: FormBuilder, private userService: UserService, private loginService: LoginService) {
  }

  user: User;
  editMode: boolean = false;

  toggleEdit(){
    this.editMode = true;
  }

  edit(){
    if(this.editUserForm.valid){
      this.userService.updateById(this.editUserForm.value as User, this.user.idUsuario).subscribe({
        next: (data) => {
          if(data as unknown as boolean == true){
            this.userService.getUserByUsername(sessionStorage.getItem("username") as String).subscribe({
              next: (userData) => {
                this.user = userData;
              }
            });
          }
        },
        error: (errorData) => {
          this.editError=errorData;
        },
        complete: () => {
          this.editUserForm.reset();
        }
      })

    }
    else{
      this.editUserForm.markAllAsTouched();
      alert("Error al ingresar los datos.");
    }
    this.editMode = false;
  }

  logout(){
    this.loginService.logout();
    console.log('logout');
  }


  ngOnInit(): void {

    this.userService.getUserByUsername(sessionStorage.getItem("username") as String).subscribe({
      next: (userData) => {
        this.user = userData;
      }
    });
  }

}
