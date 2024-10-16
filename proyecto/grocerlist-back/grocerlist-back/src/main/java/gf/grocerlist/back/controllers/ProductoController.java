package gf.grocerlist.back.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import gf.grocerlist.back.entities.Producto;
import gf.grocerlist.back.services.ProductoService;

@RestController
public class ProductoController {

	@Autowired
	ProductoService service;
	
	@GetMapping("/products/all")
	public List<Producto> getAllProducts(){
		return service.getAll();
	}
	
}
