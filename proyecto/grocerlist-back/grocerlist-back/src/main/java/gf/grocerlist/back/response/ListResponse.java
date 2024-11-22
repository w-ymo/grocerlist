package gf.grocerlist.back.response;

import gf.grocerlist.back.entities.Usuario;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ListResponse {
	Long idLista;
	String nombreLista;
}
