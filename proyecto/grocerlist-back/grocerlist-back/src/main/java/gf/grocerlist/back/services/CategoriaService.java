package gf.grocerlist.back.services;

import java.util.List;

import gf.grocerlist.back.entities.Categoria;

public interface CategoriaService {

	List<Categoria> getAll();
	Categoria getById(Long id);
	
}
