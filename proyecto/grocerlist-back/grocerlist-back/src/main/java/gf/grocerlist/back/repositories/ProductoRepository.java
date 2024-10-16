package gf.grocerlist.back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import gf.grocerlist.back.entities.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Long>{

}
