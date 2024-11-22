package gf.grocerlist.back.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import gf.grocerlist.back.entities.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long>{

	@Query("select c from Categoria c where c.nombreCategoria = :nombre")
	public Optional<Categoria> findByName(@Param("nombre") String nombre);
	
}
