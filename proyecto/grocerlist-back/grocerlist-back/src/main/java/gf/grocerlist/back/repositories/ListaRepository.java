package gf.grocerlist.back.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import gf.grocerlist.back.entities.Lista;
import gf.grocerlist.back.entities.Producto;

public interface ListaRepository  extends JpaRepository<Lista, Long>{

	@Query("select l from Lista l join fetch l.usuarios u where u.nombreUsuario = :username")
	List<Lista> getByUsuarioUsername(@Param("username") String username);
	
	@Query("select l from Lista l where l.usuarioCreador.nombreUsuario = :username")
	List<Lista> getByUsuarioCreador(@Param("username") String username);
	
	@Query("select l.productos from Lista l where l.idLista = :idLista")
	List<Producto> getProducts(@Param("idLista") Long idLista);
	
}
