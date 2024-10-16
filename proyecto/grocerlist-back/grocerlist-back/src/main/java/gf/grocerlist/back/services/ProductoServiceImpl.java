package gf.grocerlist.back.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gf.grocerlist.back.entities.Producto;
import gf.grocerlist.back.repositories.ProductoRepository;

@Service
public class ProductoServiceImpl implements ProductoService{

	@Autowired
	ProductoRepository repo;

	@Override
	public boolean insertProduct(Producto producto) {
		Producto prod = repo.save(producto);
		return prod != null;
	}

	@Override
	public Producto getById(Long id) {
		Optional<Producto> optional = repo.findById(id);
		if(optional.isPresent()) {
			return optional.get();
		}else {
			return null;
		}
	}

	@Override
	public List<Producto> getByCategory(Long idCategoria) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Producto> getByMatchingName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Producto> getAll() {
		return repo.findAll();
	}
	
	
	
	
}
