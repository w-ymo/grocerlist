package gf.grocerlist.back.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import gf.grocerlist.back.entities.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

	Optional<Usuario> findByNombreUsuario(String username);
	
	
}
