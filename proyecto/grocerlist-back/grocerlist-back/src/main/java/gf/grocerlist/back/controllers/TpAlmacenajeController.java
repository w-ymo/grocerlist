package gf.grocerlist.back.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gf.grocerlist.back.entities.TpAlmacenaje;
import gf.grocerlist.back.services.TpAlmacenajeService;

@RestController
@RequestMapping("/api/almacenaje")
@CrossOrigin(origins = {"http://localhost:4200"})
public class TpAlmacenajeController {

	@Autowired
	TpAlmacenajeService service;
	
	@GetMapping("/all")
	public ResponseEntity<List<TpAlmacenaje>> getAll(){
		return ResponseEntity.ok(service.getAll());
	}
	
}
