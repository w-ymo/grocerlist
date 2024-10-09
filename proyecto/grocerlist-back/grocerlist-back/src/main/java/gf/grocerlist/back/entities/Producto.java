package gf.grocerlist.back.entities;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "producto")
@Data
public class Producto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_producto")
	private Long idProducto;
	
	@Column(name = "nombre_producto")
	private String nombreProducto;
	
	@ManyToOne
    @JoinColumn(name = "id_categoria", columnDefinition = "categoria")
	private Categoria categoria;
	
	@ManyToOne
	@JoinColumn(name = "id_almacenaje", columnDefinition = "tipo_almacenaje")
	private TpAlmacenaje tpAlmacenaje;
	
	@ManyToMany(mappedBy = "productos")
	private Set<Lista> listas = new HashSet<>();
}
