package gf.grocerlist.back.services;

import gf.grocerlist.back.entities.Usuario;

public interface UsuarioService {

	boolean save(Usuario usuario);
	boolean update(Usuario usuario);
	Usuario findById(Long id);
	Usuario findByUsername(String username);
	
}
