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
import { TpAlmacenaje } from '../models/tpAlmacenaje';
import { TpAlmacenajeService } from '../services/tpAlmacenaje-service/tp-almacenaje.service';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ShareListComponent } from '../share-list/share-list.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HeaderGrocerlistComponent, SideMenuComponent, CommonModule, HttpClientModule, RouterLink, FormsModule, ReactiveFormsModule, MatCheckboxModule, MatSelectModule, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  userLoginOn: boolean = false;

  esPropietario: boolean = false;

  list: List;
  productosAdded: Incluye[];
  productosNotAdded: Incluye[];

  almacenajes: TpAlmacenaje[];

  productSize: boolean;

  titleListForm = this.formBuilder.group({
    title: ['', [Validators.required]]
  });

  get title() {
    return this.titleListForm.controls.title;
  }

  errorMessage: string;

  editMode: boolean = false;

  constructor(private listService: ListasService, private formBuilder: FormBuilder, private router: Router, private incluyeService: IncluyeService, private loginService: LoginService,
    private tpAlmacenajeService: TpAlmacenajeService, private dialog: MatDialog) {
  }

  toggleEdit() {
    this.editMode = true;
  }

  toggleAdded(producto: Incluye) {
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
    });
  }

  editProduct(producto: Incluye){
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
    });
  }

  toggleEditProduct(producto: Incluye){
    producto.editMode = true;
  }

  deleteProduct(producto: Incluye){
    this.incluyeService.deleteIncluye(producto.idLista, producto.idProducto).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (errorData) => {
        this.errorMessage = errorData;
      },
      complete: () => {
        this.getProducts();
      }
    });
  }

  deleteList(){
    this.listService.deleteList(this.list.idLista).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (errorData) => {
        this.errorMessage = errorData;
      },
      complete: () => {
        this.router.navigateByUrl("/list-of-list")
      }
    });
  }

  shareList(){
      this.dialog.open(ShareListComponent);
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

  getAlmacenaje() {
    this.tpAlmacenajeService.getAll().subscribe({
      next: (data) => {
        this.almacenajes = data;
        console.log(data);
      },
      error: (error) => {
        this.errorMessage = error;
      },
      complete: () => {
        console.info("Almacenajes recuperados");
      }
    });
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
        console.info("Productos aniadidos recuperados");
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
        console.info("Productos no aniadidos recuperados");
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
      this.esPropietario = sessionStorage.getItem("currentListPropetary") == 'true' ? true : false;
      this.getList();
      this.getAlmacenaje();
    }else{
      this.router.navigateByUrl('');
    }
  }

  isProductSize() {
    this.productSize = this.productosAdded.length > 0;
  }

}
