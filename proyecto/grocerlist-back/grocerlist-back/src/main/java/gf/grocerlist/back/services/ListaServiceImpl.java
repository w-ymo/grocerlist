package gf.grocerlist.back.services;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gf.grocerlist.back.entities.Incluye;
import gf.grocerlist.back.entities.Lista;
import gf.grocerlist.back.entities.Producto;
import gf.grocerlist.back.entities.Usuario;
import gf.grocerlist.back.repositories.ListaRepository;
import gf.grocerlist.back.repositories.UsuarioRepository;
import gf.grocerlist.back.request.ListRequest;
import gf.grocerlist.back.response.ListResponse;

@Service
public class ListaServiceImpl implements ListaService {

	@Autowired
	private ListaRepository repo;

	@Autowired
	private UsuarioRepository userRepo;

	@Override
	public Lista newList(Lista lista) {
		if (lista.getIdLista() == 0) {
			lista.setIdLista(null);
		}
		Optional<Usuario> optional = userRepo.findById(lista.getUsuarioCreador().getIdUsuario());
		if (optional.isPresent()) {
			lista.setUsuarioCreador(optional.get());
		}
		return repo.save(lista);
	}

	@Override
	public ListResponse getByIdResponse(Long id) {
		Optional<Lista> optional = repo.findById(id);
		Lista l = (optional.isPresent()) ? optional.get() : null;
		ListResponse response = ListResponse.builder().idLista(l.getIdLista()).nombreLista(l.getNombreLista()).build();
		return response;
	}
	
	@Override
	public Lista getById(Long id) {
		Optional<Lista> optional = repo.findById(id);
		Lista l = (optional.isPresent()) ? optional.get() : null;
		return l;
	}

	@Override
	public boolean deleteList(Long id) {
		try{
			repo.deleteById(id);
			return true;
		}catch(Exception e){
			return false;
		}
	}

	@Override
	public ListResponse updateList(ListRequest lista) {
		Optional<Lista> optional = repo.findById(lista.getIdLista());
		Lista l = (optional.isPresent()) ? optional.get() : null;
		l.setNombreLista(lista.getNombreLista());
		Lista listUpdated = repo.save(l);
		ListResponse response = ListResponse.builder().idLista(listUpdated.getIdLista()).nombreLista(listUpdated.getNombreLista()).build();
		return response;
	}

	@Override
	public List<Lista> getByUser(String username) {
		return repo.getByUsuarioUsername(username);
	}

	@Override
	public List<ListResponse> getByCreatorUser(String username) {
		List<Lista> list = repo.getByUsuarioCreador(username);
		return transformListasToListsResponses(list);
	}

	@Override
	public List<Producto> getProducts(Long id) {
		return repo.getProducts(id);
	}

	private ListResponse transformListaToListResponse(Lista l) {
		return ListResponse.builder().idLista(l.getIdLista()).nombreLista(l.getNombreLista()).build();
	}
	
	private List<ListResponse> transformListasToListsResponses(List<Lista> l){
		List<ListResponse> finalList = new ArrayList<>();
		l.forEach(list -> {
			finalList.add(transformListaToListResponse(list));
		});
		return finalList;
	}
}
