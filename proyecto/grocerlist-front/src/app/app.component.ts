import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { InsertProductsScript } from './scripts/insertProducts';
import { ProductsService } from './services/product-service/products.service';
import { CategoriaService } from './services/categoria-service/categoria.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, HomeComponent, HttpClientModule, MatFormField, MatSelectModule, MatMenuModule, MatIconModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  /**
   *
   */
  constructor(private productService: ProductsService, private categoriaService: CategoriaService) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    var main: InsertProductsScript = new InsertProductsScript(this.productService, this.categoriaService);
    //main.run();
  }

}