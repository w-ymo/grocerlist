import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { JwtInterceptorService } from './services/jwt-interceptor-service/jwt-interceptor.service';
import { ErrorInterceptorService } from './services/error-interceptor-service/error-interceptor.service';
import { LoginService } from './services/login-service/login.service';
import { UserService } from './services/user-service/user.service';
import { ListasService } from './services/list-service/listas.service';
import { ProductsService } from './services/product-service/products.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), HttpClientModule, provideHttpClient(withInterceptorsFromDi()),
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true},
    LoginService, UserService, ListasService, ProductsService
  ],
};

export const baseURI = 'http://localhost:7001'
