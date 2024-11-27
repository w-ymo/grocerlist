package gf.grocerlist.back.entities;

import java.util.Set;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "incluye")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Incluye {
	
	@EmbeddedId
	private ProductoListaId id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("idProducto")
	@JoinColumn(name = "id_producto", insertable = false, updatable = false)
	private Producto producto;

	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("idLista")
	@JoinColumn(name = "id_lista", insertable = false, updatable = false)
	private Lista lista;
	
	private Boolean added;
	
	private Long cantidad;
	
	@ManyToOne
	@JoinColumn(name = "id_almacenaje")
	private TpAlmacenaje tpAlmacenaje;
	
}
