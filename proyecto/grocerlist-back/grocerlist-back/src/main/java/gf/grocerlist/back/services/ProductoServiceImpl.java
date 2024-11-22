package gf.grocerlist.back.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gf.grocerlist.back.entities.Categoria;
import gf.grocerlist.back.entities.Producto;
import gf.grocerlist.back.repositories.ProductoRepository;
import gf.grocerlist.back.request.FilterProductRequest;
import gf.grocerlist.back.request.ProductRequest;
import gf.grocerlist.back.response.CategoriaResponse;
import gf.grocerlist.back.response.ProductResponse;

@Service
public class ProductoServiceImpl implements ProductoService {

	@Autowired
	ProductoRepository repo;

	@Autowired
	CategoriaService categoriaService;

	@Override
	public ProductResponse insertProduct(ProductRequest request) {
		Producto prod = request.transform();
		Categoria categoria = categoriaService.getByName(prod.getCategoria().getNombreCategoria());
		prod.setCategoria(categoria);
		prod = repo.save(prod);
		return transformProductToProductResponse(prod);
	}

	@Override
	public Producto getById(Long id) {
		Optional<Producto> optional = repo.findById(id);
		if (optional.isPresent()) {
			return optional.get();
		} else {
			return null;
		}
	}

	public List<Producto> getByCategory(Long idCategoria) {
		return repo.findByCategory(idCategoria);
	}

	public List<Producto> getByMatchingName(String name) {
		return repo.findLikeName(name);
	}

	public List<Producto> getByMatchingNameInCategory(String name, Long idCategoria) {
		return repo.findLikeNameInCategory(name, idCategoria);
	}

	@Override
	public List<ProductResponse> getByFilter(FilterProductRequest request) {
		List<ProductResponse> response = new ArrayList<>();
		String nombreProducto = request.getNombreProducto();
		Long idCategoria = request.getIdCategoria();
		if(nombreProducto != null && idCategoria != null) {
			response = transformProductsToProductsResponses(getByMatchingNameInCategory(nombreProducto, idCategoria));
		}else if(nombreProducto != null && idCategoria == null) {
			response = transformProductsToProductsResponses(getByMatchingName(nombreProducto));
		}else if(nombreProducto == null && idCategoria != null) {
			response = transformProductsToProductsResponses(getByCategory(idCategoria));
		}
		return response.isEmpty() ? null : response;
	}

	@Override
	public List<Producto> getAll() {
		return repo.findAll();
	}

	private ProductResponse transformProductToProductResponse(Producto producto) {
		CategoriaResponse categoria = categoriaService.getById(producto.getCategoria().getIdCategoria());
		return ProductResponse.builder().idProducto(producto.getIdProducto())
				.nombreProducto(producto.getNombreProducto()).categoria(categoria).build();
	}

	private List<ProductResponse> transformProductsToProductsResponses(List<Producto> productos) {
		List<ProductResponse> response = new ArrayList<>();
		productos.forEach(producto -> {
			response.add(transformProductToProductResponse(producto));
		});
		return response;
	}

}
