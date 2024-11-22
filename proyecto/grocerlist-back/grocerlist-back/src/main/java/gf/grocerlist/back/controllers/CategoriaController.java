package gf.grocerlist.back.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gf.grocerlist.back.entities.Categoria;
import gf.grocerlist.back.request.CategoriaRequest;
import gf.grocerlist.back.response.CategoriaResponse;
import gf.grocerlist.back.services.CategoriaService;

@RestController
@RequestMapping("/api/categoria")
@CrossOrigin(origins = { "http://localhost:4200" })
public class CategoriaController {

	@Autowired
	private CategoriaService service;
	
	@GetMapping("/porNombre/{name}")
	public Categoria getByName(@PathVariable String name) {
		return service.getByName(name);
	}
	
	@PostMapping("/insert")
	public CategoriaResponse insert(@RequestBody CategoriaRequest categoria) {
		return service.insert(categoria);
	}
	
	@GetMapping("/all")
	public List<CategoriaResponse> getAll(){
		return service.getAll();
	} 
	
}
