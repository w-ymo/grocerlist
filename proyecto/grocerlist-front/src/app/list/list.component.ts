import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ListasService } from '../services/list-service/listas.service';
import { HeaderGrocerlistComponent } from '../header-grocerlist/header-grocerlist.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { CommonModule } from '@angular/common';
import { List } from '../models/list';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IncluyeService } from '../services/incluye-service/incluye.service';
import { IncluyeAdded } from '../models/incluyeAdded';
import { Incluye } from '../models/incluye';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../models/product';
import { ProductsComponent } from '../products/products.component';
import { LoginService } from '../services/login-service/login.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HeaderGrocerlistComponent, SideMenuComponent, CommonModule, HttpClientModule, RouterLink, FormsModule, ReactiveFormsModule, MatCheckboxModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  userLoginOn: boolean = false;

  list: List;
  productosAdded: Incluye[];
  productosNotAdded: Incluye[];

  productSize: boolean;

  titleListForm = this.formBuilder.group({
    title: ['', [Validators.required]]
  });

  get title() {
    return this.titleListForm.controls.title;
  }

  errorMessage: string;

  editMode: boolean = false;

  constructor(private listService: ListasService, private formBuilder: FormBuilder, private router: Router, private incluyeService: IncluyeService, private loginService: LoginService) {
  }

  toggleEdit() {
    this.editMode = true;
  }

  toggleAdded(producto: Incluye) {
    console.log(producto.added);
    this.incluyeService.updateIncluye(producto).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (errorData) => {
        this.errorMessage = errorData;
      },
      complete: () => {
        this.getProducts();
      }
    })
  }

  editTitle() {
    if (this.titleListForm.valid) {
      this.listService.updateById(this.list).subscribe({
        next: (data) => {
          if (data != null) {
            this.getList();
          }
        },
        error: (errorData) => {
          this.errorMessage = errorData;
        },
        complete: () => {
          this.titleListForm.reset();
        }
      });
    } else {
      this.titleListForm.markAllAsTouched();
      alert("Error al ingresar los datos.");
    }
    this.editMode = false;
  }

  getList() {
    var idList = sessionStorage.getItem("currentList");

    this.listService.getById(idList as unknown as number).subscribe({
      next: (list) => {
        this.list = list;
        console.log(list);
      },
      error: (error) => {
        this.errorMessage = error;
      },
      complete: () => {
        console.info("Lista recuperada");
        this.getProducts();
      }
    });
  }

  getProducts() {
    var requestAdded: IncluyeAdded = {
      idLista: this.list.idLista,
      added: true
    };
    var requestNotAdded: IncluyeAdded = {
      idLista: this.list.idLista,
      added: false
    };
    this.incluyeService.getAllProducts(requestAdded).subscribe({
      next: (products) => {
        this.productosAdded = products;
        console.log(products);
      },
      error: (error) => {
        this.errorMessage = error;
      },
      complete: () => {
        this.isProductSize();
        console.info("productos aniadidos recuperados");
      }
    });

    this.incluyeService.getAllProducts(requestNotAdded).subscribe({
      next: (products) => {
        this.productosNotAdded = products;
        console.log(products);
      },
      error: (error) => {
        this.errorMessage = error;
      },
      complete: () => {
        console.info("productos no aniadidos recuperados");
      }
    });
  }

  openAddProduct() {
    this.router.navigateByUrl('/products')
  }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      }
    });
    if (this.userLoginOn) {
      this.getList();
    }
  }

  isProductSize() {
    this.productSize = this.productosAdded.length > 0;
  }

}
