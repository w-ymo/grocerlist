package gf.grocerlist.back.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import gf.grocerlist.back.entities.Usuario;
import gf.grocerlist.back.repositories.UsuarioRepository;

public class UsuarioServiceImpl implements UsuarioService{

	@Autowired
	private UsuarioRepository repo;
	
	@Override
	public boolean save(Usuario usuario) {
		Usuario user = repo.save(usuario);
		return user != null;
	}

	@Override
	public Usuario findById(Long id) {
		Optional<Usuario> optional = repo.findById(id);
		if(optional.isPresent()) {
			return optional.get();
		}else {
			return null;
		}
	}

	@Override
	public Usuario findByUsername(String username) {
		Optional<Usuario> optional = repo.findByNombreUsuario(username);
		if(optional.isPresent()) {
			return optional.get();
		}else {
			return null;
		}
	}

}
