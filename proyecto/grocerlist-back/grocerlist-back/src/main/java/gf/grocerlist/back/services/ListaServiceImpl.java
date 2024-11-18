package gf.grocerlist.back.services;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gf.grocerlist.back.entities.Lista;
import gf.grocerlist.back.entities.Producto;
import gf.grocerlist.back.repositories.ListaRepository;

@Service
public class ListaServiceImpl implements ListaService{

	@Autowired
	private ListaRepository repo;
	
	@Override
	public boolean newList(Lista lista) {
		repo.save(lista);
		return false;
	}

	@Override
	public boolean insertProduct(Producto producto, Lista lista) {
		Set<Producto> productosSet = lista.getProductos();
		productosSet.add(producto);
		lista.setProductos(productosSet);
		repo.save(lista);
		return false;
	}

	@Override
	public boolean insertProducts(List<Producto> productos, Lista lista) {
		Set<Producto> productosSet = lista.getProductos();
		productosSet.addAll(productos);
		lista.setProductos(productosSet);
		repo.save(lista);
		return false;
	}

	@Override
	public Lista getById(Long id) {
		Optional<Lista> optional = repo.findById(id);
		return (optional.isPresent()) ? optional.get() : null;
	}
	

	@Override
	public boolean deleteList(Long id) {
		repo.deleteById(id);
		return false;
	}

	@Override
	public Lista updateProducts(List<Producto> nuevoProducto, Lista lista) {
		Set<Producto> productos = new HashSet<>();
		productos.addAll(nuevoProducto);
		lista.setProductos(productos);
		return repo.save(lista);
	}

	@Override
	public Lista updateList(Lista lista) {
		return repo.save(lista);
	}

	@Override
	public List<Lista> getByUser(Long id) {
		return repo.getByUsuarioIdUsuario(id);
	}

	@Override
	public List<Lista> getByCreatorUser(Long id) {
		return repo.getByUsuarioCreador(id);
	}

	@Override
	public List<Producto> getProducts(Long id) {
		return repo.getProducts(id);
	}

	
	
}
