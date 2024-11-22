package gf.grocerlist.back.services;

import java.util.List;

import gf.grocerlist.back.entities.Categoria;
import gf.grocerlist.back.request.CategoriaRequest;
import gf.grocerlist.back.response.CategoriaResponse;

public interface CategoriaService {

	List<CategoriaResponse> getAll();
	CategoriaResponse getById(Long id);
	CategoriaResponse insert(CategoriaRequest request);
	Categoria getByName(String nombreCategoria);
	
}
