package gf.grocerlist.back.request;

import gf.grocerlist.back.entities.Categoria;
import gf.grocerlist.back.response.IncluyeResponse;
import gf.grocerlist.back.response.ProductResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CategoriaRequest {

	Long idCategoria;
	String nombreCategoria;

	public Categoria transform() {
		return Categoria.builder().idCategoria(idCategoria).nombreCategoria(nombreCategoria).build();
	}

}
