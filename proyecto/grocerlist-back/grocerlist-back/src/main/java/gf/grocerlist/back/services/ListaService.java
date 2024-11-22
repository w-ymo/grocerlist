package gf.grocerlist.back.services;

import java.util.List;

import gf.grocerlist.back.entities.Lista;
import gf.grocerlist.back.entities.Producto;
import gf.grocerlist.back.request.ListRequest;
import gf.grocerlist.back.response.ListResponse;

public interface ListaService {

	Lista newList(Lista lista);
	List<Producto> getProducts(Long id);
	ListResponse getById(Long id);
	List<Lista> getByUser(String username);
	List<ListResponse> getByCreatorUser(String username);
	boolean deleteList(Long id);
	ListResponse updateList(ListRequest lista);
}
