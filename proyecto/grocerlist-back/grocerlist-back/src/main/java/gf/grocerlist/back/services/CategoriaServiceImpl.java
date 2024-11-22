package gf.grocerlist.back.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gf.grocerlist.back.entities.Categoria;
import gf.grocerlist.back.repositories.CategoriaRepository;
import gf.grocerlist.back.request.CategoriaRequest;
import gf.grocerlist.back.response.CategoriaResponse;

@Service
public class CategoriaServiceImpl implements CategoriaService {

	@Autowired
	private CategoriaRepository repo;

	@Override
	public List<CategoriaResponse> getAll() {
		return transformCategoriasToCategoriasResponses(repo.findAll());
	}

	@Override
	public CategoriaResponse getById(Long id) {
		Optional<Categoria> optional = repo.findById(id);
		if (optional.isPresent()) {
			return transformCategoriaToCategoriaResponse(optional.get());
		} else {
			return null;
		}
	}

	@Override
	public CategoriaResponse insert(CategoriaRequest request) {
		Categoria categoria = Categoria.builder().idCategoria(request.getIdCategoria())
				.nombreCategoria(request.getNombreCategoria()).build();
		return transformCategoriaToCategoriaResponse(repo.save(categoria));
	}

	@Override
	public Categoria getByName(String nombreCategoria) {
		Optional<Categoria> optional = repo.findByName(nombreCategoria);
		if(optional.isPresent()) {
			return optional.get();
		}else {
			return null;
		}
	}
	
	private CategoriaResponse transformCategoriaToCategoriaResponse(Categoria categoria) {
		return CategoriaResponse.builder().idCategoria(categoria.getIdCategoria())
				.nombreCategoria(categoria.getNombreCategoria()).build();
	}

	private List<CategoriaResponse> transformCategoriasToCategoriasResponses(List<Categoria> categorias) {
		List<CategoriaResponse> response = new ArrayList<>();
		categorias.forEach(categoria -> {
			response.add(transformCategoriaToCategoriaResponse(categoria));
		});
		return response;
	}

	

}
