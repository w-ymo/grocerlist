package gf.grocerlist.back.request;

import gf.grocerlist.back.entities.Producto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductRequest {

	Long idProducto;
	String nombreProducto;
	CategoriaRequest categoria;

	public Producto transform() {
		return Producto.builder().idProducto(idProducto).nombreProducto(nombreProducto).categoria(categoria.transform())
				.build();
	}
}
