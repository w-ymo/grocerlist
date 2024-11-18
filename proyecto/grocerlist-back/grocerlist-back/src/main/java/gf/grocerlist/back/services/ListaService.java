package gf.grocerlist.back.services;

import java.util.List;

import gf.grocerlist.back.entities.Lista;
import gf.grocerlist.back.entities.Producto;

public interface ListaService {

	boolean newList(Lista lista);
	List<Producto> getProducts(Long id);
	boolean insertProduct(Producto producto, Lista lista);
	boolean insertProducts(List<Producto> productos, Lista lista);
	Lista getById(Long id);
	List<Lista> getByUser(Long id);
	List<Lista> getByCreatorUser(Long id);
	boolean deleteList(Long id);
	Lista updateProducts(List<Producto> nuevoProducto, Lista lista);
	Lista updateList(Lista lista);
}
