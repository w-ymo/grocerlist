package gf.grocerlist.back.services;

import java.util.List;

import gf.grocerlist.back.entities.Producto;
import gf.grocerlist.back.request.FilterProductRequest;
import gf.grocerlist.back.request.ProductRequest;
import gf.grocerlist.back.response.ProductResponse;

public interface ProductoService {

	ProductResponse insertProduct(ProductRequest request);
	Producto getById(Long id);
	List<Producto> getAll();
	List<ProductResponse> getByFilter(FilterProductRequest request);
}
