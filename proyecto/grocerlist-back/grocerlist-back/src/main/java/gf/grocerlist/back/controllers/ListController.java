package gf.grocerlist.back.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import gf.grocerlist.back.entities.Lista;
import gf.grocerlist.back.entities.Producto;
import gf.grocerlist.back.services.ListaService;


@RestController
@RequestMapping("/listas")
@CrossOrigin(origins = {"http://localhost:4200"})
public class ListController {

	@Autowired
	ListaService service;
	
	@GetMapping("/obtener/seguidas/{id}")
	public List<Lista> getListsAdded(@PathVariable Long id){
		return service.getByUser(id);
	}

	@GetMapping("/obtener/creadas/{id}")
	public List<Lista> getLists(@PathVariable Long id){
		return service.getByCreatorUser(id);
	}
	
	@GetMapping("/obtenerProductos/{idLista}")
	public List<Producto> getProducts(@PathVariable Long idLista){
		return service.getProducts(idLista);
	}

	@PostMapping("/insertarLista")
	public boolean insertList(@RequestBody Lista lista) {
		return service.newList(lista);
	}
	
}
