package gf.grocerlist.back.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gf.grocerlist.back.entities.Producto;
import gf.grocerlist.back.request.IncluyeAddedRequest;
import gf.grocerlist.back.request.IncluyeRequest;
import gf.grocerlist.back.response.IncluyeResponse;
import gf.grocerlist.back.services.IncluyeService;
import jakarta.websocket.server.PathParam;

@RestController
@RequestMapping("/api/incluye")
@CrossOrigin(origins = {"http://localhost:4200"})
public class IncluyeController {

	@Autowired
	private IncluyeService service;
	
	@PostMapping("/obtener")
	public List<IncluyeResponse> getAll(@RequestBody IncluyeAddedRequest req){
		return service.getAllIncluye(req);
	}
	
	@PostMapping("/obtenerProd")
	public List<Producto> getAllProducts(@RequestBody IncluyeAddedRequest req){
		return service.getAllProducts(req);
	}

	@PutMapping("/actualizar/{idLista}/{idProducto}")
	public IncluyeResponse updateById(@PathVariable Long idLista, @PathVariable Long idProducto, @RequestBody IncluyeRequest incluye) {
		return service.updateIncluye(incluye);
	}
	
}
