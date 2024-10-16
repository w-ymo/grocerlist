package gf.grocerlist.back.services;

import java.util.List;

import gf.grocerlist.back.entities.Producto;

public interface ProductoService {

	boolean insertProduct(Producto producto);
	Producto getById(Long id);
	List<Producto> getAll();
	List<Producto> getByCategory(Long idCategoria);
	List<Producto> getByMatchingName(String name);
}
