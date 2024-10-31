package gf.grocerlist.back.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gf.grocerlist.back.entities.Lista;
import gf.grocerlist.back.services.ListaService;

@RestController
@RequestMapping("/listas")
public class ListController {

	@Autowired
	ListaService service;
	
	@GetMapping("/obtener/{username}")
	public List<Lista> getAllProducts(@PathVariable String username){
		return service.getByUser(username);
	}
	
}
