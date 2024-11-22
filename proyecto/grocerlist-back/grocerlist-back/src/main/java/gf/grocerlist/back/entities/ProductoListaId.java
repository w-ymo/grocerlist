package gf.grocerlist.back.entities;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductoListaId implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Column(name = "id_producto")
	private Long idProducto;
	
	@Column(name = "id_lista")
	private Long idLista;

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ProductoListaId other = (ProductoListaId) obj;
		return Objects.equals(idLista, other.idLista) && Objects.equals(idProducto, other.idProducto);
	}

	@Override
	public int hashCode() {
		return Objects.hash(idLista, idProducto);
	}
	
}
