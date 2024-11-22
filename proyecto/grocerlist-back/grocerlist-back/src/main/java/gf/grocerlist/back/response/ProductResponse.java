package gf.grocerlist.back.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductResponse {

	Long idProducto;
	String nombreProducto;
	CategoriaResponse categoria;
}
