import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [ { path: '', pathMatch: 'full', redirectTo: 'home'},
        { path: 'login', component: LoginComponent}];

        @NgModule({
            declarations: [
              AppComponent,
              LoginComponent
            ],
            imports: [
              RouterModule.forRoot(routes),
              BrowserModule,
              HttpClientModule,
              FormsModule
            ],
            providers: [AppModule],
            bootstrap: [AppComponent]
          })
          export class AppModule { }      
