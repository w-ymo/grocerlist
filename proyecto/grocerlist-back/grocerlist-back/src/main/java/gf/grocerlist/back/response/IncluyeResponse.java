package gf.grocerlist.back.response;

import java.util.List;

import gf.grocerlist.back.entities.Producto;
import gf.grocerlist.back.entities.TpAlmacenaje;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class IncluyeResponse {

	Long idLista;
	Long idProducto;
	Long cantidad;
	Boolean added;
	ProductResponse producto;
	TpAlmacenaje tpAlmacenaje;
}
