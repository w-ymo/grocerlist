package gf.grocerlist.back.entities;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tipo_almacenaje")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TpAlmacenaje {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_almacenaje")
	private Long idAlmacenaje;
	
	@Column(name = "nombre_almacenaje")
	private String nombreAlmacenaje;
	
	@Column(name = "unidades_almacenaje")
	private String unidadesAlmacenaje;
	
}
