package gf.grocerlist.back.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gf.grocerlist.back.entities.Categoria;
import gf.grocerlist.back.repositories.CategoriaRepository;

@Service
public class CategoriaServiceImpl implements CategoriaService {

	@Autowired
	private CategoriaRepository repo;
	
	@Override
	public List<Categoria> getAll() {
		return repo.findAll();
	}

	@Override
	public Categoria getById(Long id) {
		Optional<Categoria> optional = repo.findById(id);
		if(optional.isPresent()) {
			return optional.get();
		}else {
			return null;
		}
	}

	
	
}
