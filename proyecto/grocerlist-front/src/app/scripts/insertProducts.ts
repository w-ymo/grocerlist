import { Categoria } from "../models/categoria";
import { Product } from "../models/product";
import { ProductoLosPrecios } from "../models/productoLosPrecios";
import { CategoriaService } from "../services/categoria-service/categoria.service";
import { ProductsService } from "../services/product-service/products.service";

export class InsertProductsScript {

    productoLosPrecios: ProductoLosPrecios;
    productos: ProductoLosPrecios[] = [];
    categorias: string[] = [];
    categoriasPre: string[] = [];


    constructor(private productosService: ProductsService, private categoriaService: CategoriaService) {
    }

    private async getProducts() {
        for (let index = 0; index < 3808; index+= 30) {
            this.productosService.getFromLosPrecios(index).subscribe({
                next: (data) => {
                    console.log(data);
                    this.productoLosPrecios = {
                        Datos: {
                            ID: data.Datos.ID,
                            Nombre: data.Datos.Nombre,
                            Categoría: data.Datos.Categoría
                        }
                    };
                    this.productos.push(this.productoLosPrecios);
                    this.categoriasPre.push(this.productoLosPrecios.Datos.Categoría);
                },
                complete: () => {
                    // this.productosService.insertProducto(this.transformProduct(this.productoLosPrecios)).subscribe({
                    //     next: (data) => {
                    //         console.log(data);
                    //     }
                    // });
                }
            });
            await this.sleep(1800);
        }
        this.insertCategorias();
    }

    private async insertCategorias() {
        for (let index = 0; index < this.categoriasPre.length; index++) {
            const element = this.categoriasPre[index];
            if (this.categorias.indexOf(element) == -1) {
                this.categorias.push(element);
                var cat: Categoria = {
                    idCategoria: 0,
                    nombreCategoria: element
                }
                this.categoriaService.insertCategoria(cat).subscribe({
                    next: (data) => {
                        console.log('categoria');
                        console.log(data);
                    },
                    complete: () => {
                        console.log('xd');
                    }
                });
            }
            await this.sleep(1000);
        }
        this.insertProducts();
    }

    private async insertProducts() {
        for (let index = 0; index < this.productos.length; index++) {
            const element = this.productos[index];
            console.log(element);
            this.productosService.insertProducto(this.transformProduct(element)).subscribe({
                next: (data) => {
                    console.log('producto');
                    console.log(data);
                }
            });
            await this.sleep(1500);
        }
    }

    private transformProduct(prod: ProductoLosPrecios): Product {
        var product: Product = {
            idProducto: prod.Datos.ID,
            nombreProducto: prod.Datos.Nombre,
            categoria: {
                idCategoria: 0,
                nombreCategoria: prod.Datos.Categoría
            }
        }
        return product;
    }

    private async sleep(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    private getProduct() {
        this.productosService.getFromLosPrecios(1).subscribe({
            next: (data) => {
                console.log(data);
                this.productoLosPrecios = data;
            }
        });
    }

    run() {
        this.getProducts();
        //this.getProduct();
    }

}