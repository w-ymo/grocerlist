package gf.grocerlist.back.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gf.grocerlist.back.entities.Producto;
import gf.grocerlist.back.request.FilterProductRequest;
import gf.grocerlist.back.request.ProductRequest;
import gf.grocerlist.back.response.ProductResponse;
import gf.grocerlist.back.services.ProductoService;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = {"http://localhost:4200"})
public class ProductoController {

	@Autowired
	ProductoService service;
	
	@GetMapping("/all")
	public List<Producto> getAllProducts(){
		return service.getAll();
	}
	
	@PostMapping("/insert")
	public ProductResponse insertProduct(@RequestBody ProductRequest request) {
		return service.insertProduct(request);
	}
	
	@PostMapping("/filter")
	public List<ProductResponse> getByFilter(@RequestBody FilterProductRequest request){
		return service.getByFilter(request);
	}
	
}
