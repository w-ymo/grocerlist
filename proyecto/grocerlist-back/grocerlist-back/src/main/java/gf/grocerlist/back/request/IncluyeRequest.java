package gf.grocerlist.back.request;

import gf.grocerlist.back.entities.Incluye;
import gf.grocerlist.back.entities.Lista;
import gf.grocerlist.back.entities.Producto;
import gf.grocerlist.back.entities.ProductoListaId;
import gf.grocerlist.back.entities.TpAlmacenaje;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class IncluyeRequest {
	
	Long idLista;
	Long idProducto;
	Boolean added;
	Long cantidad;
	TpAlmacenaje tpAlmacenaje;
	
	public Incluye transform(Lista lista, Producto producto) {
		ProductoListaId idIncluye = ProductoListaId.builder().idLista(lista.getIdLista())
				.idProducto(producto.getIdProducto()).build();
		Incluye incluye = Incluye.builder().id(idIncluye).producto(producto).lista(lista)
				.cantidad(cantidad).added(added).tpAlmacenaje(tpAlmacenaje)
				.build();
		return incluye;
	}
	
	public Incluye transform() {
		ProductoListaId idIncluye = ProductoListaId.builder().idLista(idLista)
				.idProducto(idProducto).build();
		Incluye incluye = Incluye.builder().id(idIncluye)
				.cantidad(cantidad).added(added).tpAlmacenaje(tpAlmacenaje)
				.build();
		return incluye;
	}
	
}
