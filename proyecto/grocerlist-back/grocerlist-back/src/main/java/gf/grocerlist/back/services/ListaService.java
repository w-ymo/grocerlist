package gf.grocerlist.back.services;

import java.util.List;

import gf.grocerlist.back.entities.Lista;
import gf.grocerlist.back.entities.Producto;

public interface ListaService {

	boolean newList(Lista lista);
	boolean insertProduct(Producto producto, Lista lista);
	boolean insertProducts(List<Producto> productos, Lista lista);
	Lista getById(Long id);
	List<Lista> getByUser(String username);
	boolean deleteList(Long id);
	Lista updateProducts(List<Producto> nuevoProducto, Lista lista);
	Lista updateList(Lista lista);
}
