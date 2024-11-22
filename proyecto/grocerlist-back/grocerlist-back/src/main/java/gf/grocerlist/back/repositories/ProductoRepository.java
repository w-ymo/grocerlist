package gf.grocerlist.back.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import gf.grocerlist.back.entities.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Long>{

	@Query("select p from Producto p where p.nombreProducto like CONCAT('%',:name,'%')")
	public List<Producto> findLikeName(@Param("name") String name);
	
	@Query("select p from Producto p where p.categoria.idCategoria = :idCategory")
	public List<Producto> findByCategory(@Param("idCategory") Long idCategory);
	
	@Query("select p from Producto p where p.nombreProducto like CONCAT('%',:name,'%') and p.categoria.idCategoria = :idCategory")
	public List<Producto> findLikeNameInCategory(@Param("name") String name, @Param("idCategory") Long idCategory);
	
}
