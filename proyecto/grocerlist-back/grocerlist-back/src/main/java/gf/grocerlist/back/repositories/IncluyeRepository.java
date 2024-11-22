package gf.grocerlist.back.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import gf.grocerlist.back.entities.Incluye;
import gf.grocerlist.back.entities.Producto;
import gf.grocerlist.back.entities.ProductoListaId;
import gf.grocerlist.back.response.IncluyeResponse;

public interface IncluyeRepository extends JpaRepository<Incluye, ProductoListaId>{

	@Query("select i from Incluye i join fetch i.producto p where i.lista.idLista = :idLista and i.added = :added")
	List<Incluye> findAllIncluye(@Param("idLista") Long idLista, @Param("added") Boolean added);
	
	@Query("select p from Incluye i join fetch Producto p on i.producto.idProducto = p.idProducto where i.lista.idLista = :idLista and i.added = :added")
	List<Producto> findAllProducts(@Param("idLista") Long idLista, @Param("added") Boolean added);

}
