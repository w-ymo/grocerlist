package gf.grocerlist.back.request;

import gf.grocerlist.back.response.ListResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ListRequest {
	Long idLista;
	String nombreLista;
}
