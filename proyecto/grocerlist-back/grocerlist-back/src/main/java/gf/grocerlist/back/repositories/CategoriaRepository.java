package gf.grocerlist.back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import gf.grocerlist.back.entities.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long>{

}
