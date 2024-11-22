import { Component } from '@angular/core';
import { HeaderGrocerlistComponent } from '../header-grocerlist/header-grocerlist.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ProductsService } from '../services/product-service/products.service';
import { Categoria } from '../models/categoria';
import { CategoriaService } from '../services/categoria-service/categoria.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { LoginService } from '../services/login-service/login.service';
import { FilterProduct } from '../models/filterProduct';
import { Product } from '../models/product';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderGrocerlistComponent, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  userLoginOn: boolean = false;

  categorias: Categoria[];
  selectedCategoria: number;

  productos: Product[];

  searchForm = this.formBuilder.group({
    nombreProducto: [''],
    categoria: []
  });

  get nombreProducto() {
    return this.searchForm.controls.nombreProducto;
  }

  get categoria() {
    return this.searchForm.controls.categoria;
  }

  constructor(private productService: ProductsService, private categoriaService: CategoriaService, private loginService: LoginService, private formBuilder: FormBuilder) {
  }

  search() {
    if (this.userLoginOn) {
      this.productService.getByFilter(this.searchForm.value as FilterProduct).subscribe({
        next: (data) => {
          console.log(data);
          this.productos = data;
        }
      });
    }
  }


  ngOnInit(): void {

    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      }
    });

    if (this.userLoginOn) {
      this.categoriaService.getCategorias().subscribe({
        next: (data) => {
          console.log(data);
          this.categorias = data;
        }
      });
    }
  }

}
