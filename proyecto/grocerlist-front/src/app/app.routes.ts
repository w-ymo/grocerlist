import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';
import { ListOfListComponent } from './list-of-list/list-of-list.component';


export const routes: Routes = [ 
        { path: "", pathMatch: "full", redirectTo: "home" },
        { path: 'home', component: HomeComponent},
        { path: 'login', component: LoginComponent},
        { path: 'register', component: RegisterComponent},
        { path: 'forgotten', component: WorkInProgressComponent},
        { path: 'list-of-list', component: ListOfListComponent},
      ];
      
  export class AppRoutingModule { }      
