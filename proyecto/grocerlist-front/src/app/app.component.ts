import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { InsertProductsScript } from './scripts/insertProducts';
import { ProductsService } from './services/product-service/products.service';
import { CategoriaService } from './services/categoria-service/categoria.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, HomeComponent, HttpClientModule],
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