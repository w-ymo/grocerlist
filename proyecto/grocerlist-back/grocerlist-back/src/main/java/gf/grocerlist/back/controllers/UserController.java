package gf.grocerlist.back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gf.grocerlist.back.entities.Usuario;
import gf.grocerlist.back.services.UsuarioService;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = { "http://localhost:4200" })
public class UserController {

	@Autowired
	UsuarioService service;

	@GetMapping("/id/{id}")
	public ResponseEntity<Usuario> getUserId(@PathVariable Long id) {
		Usuario user = service.findById(id);
		if (user == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(user);
	}

	@GetMapping("/username/{username}")
	public ResponseEntity<Usuario> getUserId(@PathVariable String username) {
		Usuario user = service.findByUsername(username);
		if (user == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(user);
	}

	@PutMapping("/actualizar/{id}")
	public ResponseEntity<Boolean> updateUser(@PathVariable Long id, @RequestBody Usuario user) {
		user.setIdUsuario(id);
		if(user.getNombre() == "") {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(false);
		}
		if (service.update(user)) {
			return ResponseEntity.ok(true);
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(false);
		}
	}

}
