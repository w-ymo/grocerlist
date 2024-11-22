package gf.grocerlist.back.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class IncluyeRequest {
	Long idLista;
	Long idProducto;
	Boolean added;
}
