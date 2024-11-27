package gf.grocerlist.back.services;

import java.util.List;

import gf.grocerlist.back.entities.Incluye;
import gf.grocerlist.back.entities.Lista;
import gf.grocerlist.back.entities.Producto;
import gf.grocerlist.back.entities.ProductoListaId;
import gf.grocerlist.back.request.IncluyeAddedRequest;
import gf.grocerlist.back.request.IncluyeRequest;
import gf.grocerlist.back.request.ProductRequest;
import gf.grocerlist.back.response.IncluyeResponse;

public interface IncluyeService {

	List<IncluyeResponse> getAllIncluye(IncluyeAddedRequest request);
	List<Producto> getAllProducts(IncluyeAddedRequest request);
	IncluyeResponse updateIncluye(IncluyeRequest request);
	IncluyeResponse insertProduct(IncluyeRequest request, Producto producto, Lista lista);
	boolean deleteProduct(ProductoListaId id);
}
