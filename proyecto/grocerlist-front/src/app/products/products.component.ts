import { Component } from '@angular/core';
import { HeaderGrocerlistComponent } from '../header-grocerlist/header-grocerlist.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ProductsService } from '../services/product-service/products.service';
import { Categoria } from '../models/categoria';
import { CategoriaService } from '../services/categoria-service/categoria.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { LoginService } from '../services/login-service/login.service';
import { FilterProduct } from '../models/filterProduct';
import { Product } from '../models/product';
import { ListasService } from '../services/list-service/listas.service';
import { List } from '../models/list';
import { IncluyeService } from '../services/incluye-service/incluye.service';
import { Incluye, IncluyeProduct } from '../models/incluye';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderGrocerlistComponent, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  errorMessage="";
  noResults=false;

  userLoginOn: boolean = false;

  categorias: Categoria[];
  selectedCategoria: Categoria;

  list: List;

  productos: Product[];

  currentProduct: Product;

  searchForm = this.formBuilder.group({
    nombreProducto: [],
    idCategoria: []
  });

  get nombreProducto() {
    return this.searchForm.controls.nombreProducto;
  }

  get idCategoria() {
    return this.searchForm.controls.idCategoria;
  }

  addProductForm = this.formBuilder.group({
    cantidad: [[Validators.required]]
  }); 

  get cantidad(){
    return this.addProductForm.controls.cantidad;
  }

  constructor(private productService: ProductsService, private categoriaService: CategoriaService, private loginService: LoginService, private listService: ListasService, 
    private incluyeService: IncluyeService, private formBuilder: FormBuilder, private router: Router) {
  }

  search() {
    this.noResults=false;
    console.log(this.searchForm.value as FilterProduct);
    if (this.userLoginOn) {
      this.productService.getByFilter(this.searchForm.value as FilterProduct).subscribe({
        next: (data) => {
          console.log(data);
          this.productos = data;
        },
        error: (errorData) => {
          this.errorMessage = errorData;
        },
        complete: () =>{
          if(this.productos == null){
            this.noResults = true;
          }
        }
      });
    }
  }

  insert() {
    //recupero la lista y la cantidades
    var incluye: IncluyeProduct = {
      idLista: this.list.idLista,
      idProducto: this.currentProduct.idProducto,
      cantidad: 0,
      tpAlmacenaje: 1,
      added: false
    };
    this.incluyeService.insertProduct(incluye).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (errorData) => {
        this.errorMessage = errorData;
      },
      complete: () => {
       this.goBack();
      }
    });
  }

  setCurrentProduct(producto: Product) {
    this.currentProduct = producto;
    console.log(this.currentProduct);
    this.insert();
  }

  getCategories() {
    this.categoriaService.getCategorias().subscribe({
      next: (data) => {
        console.log(data);
        this.categorias = data;
      },
      error: (errorData) => {
        this.errorMessage = errorData;
      }
    });
  }

  goBack(){
    this.router.navigateByUrl('/list');
  }

  getList() {
    var idList = sessionStorage.getItem("currentList");

    this.listService.getById(idList as unknown as number).subscribe({
      next: (list) => {
        this.list = list;
      },
      error: (errorData) => {
        this.errorMessage = errorData;
      },
      complete: () => {
        console.info("Lista recuperada");
      }
    });
  }


  ngOnInit(): void {

    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      },
      error: (errorData) => {
        this.errorMessage = errorData;
      }
    });

    if (this.userLoginOn) {
      this.getList();
      this.getCategories();
    }else{
      this.router.navigateByUrl('');
    }
  }

}
