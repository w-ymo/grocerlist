import { Component } from '@angular/core';
import { User } from '../models/user';
import { LoginService } from '../services/login-service/login.service';
import { UserService } from '../services/user-service/user.service';
import { HeaderGrocerlistComponent } from '../header-grocerlist/header-grocerlist.component';
import { FormBuilder, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [HeaderGrocerlistComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

  editUserForm=this.formBuilder.group({
    username:['',[Validators.required]],
    name:[''],
    lastname1: [''],
    lastname2: ['']
  });

  get name(){
    return this.editUserForm.controls.name;
  }

  get username()
  {
    return this.editUserForm.controls.username;
  }

  get lastname1()
  {
    return this.editUserForm.controls.lastname1;
  }

  get lastname2()
  {
    return this.editUserForm.controls.lastname2;
  }

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
  }

  user: User;

  ngOnInit(): void {

    this.userService.getUserByUsername(sessionStorage.getItem("username") as String).subscribe({
      next: (userData) => {
        console.log("TU MADRE");
        this.user = userData;
        console.log(this.user);
      }
    });
  }

}
