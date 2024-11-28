package gf.grocerlist.back.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gf.grocerlist.back.entities.Incluye;
import gf.grocerlist.back.entities.Lista;
import gf.grocerlist.back.entities.Producto;
import gf.grocerlist.back.entities.ProductoListaId;
import gf.grocerlist.back.entities.TpAlmacenaje;
import gf.grocerlist.back.repositories.IncluyeRepository;
import gf.grocerlist.back.request.IncluyeAddedRequest;
import gf.grocerlist.back.request.IncluyeProdRequest;
import gf.grocerlist.back.request.IncluyeRequest;
import gf.grocerlist.back.request.ProductRequest;
import gf.grocerlist.back.response.IncluyeResponse;
import gf.grocerlist.back.response.ProductResponse;

@Service
public class IncluyeServiceImpl implements IncluyeService {

	@Autowired
	private IncluyeRepository repo;

	@Override
	public List<IncluyeResponse> getAllIncluye(IncluyeAddedRequest request) {
		return transformIncluyesToIncluyesResponses(repo.findAllIncluye(request.getIdLista(), request.getAdded()));
	}

	private IncluyeResponse transformIncluyeToIncluyeResponse(Incluye incluye) {
		IncluyeResponse response = IncluyeResponse.builder().idLista(incluye.getId().getIdLista())
				.idProducto(incluye.getId().getIdProducto()).added(incluye.getAdded()).cantidad(incluye.getCantidad())
				.producto(ProductResponse.builder().idProducto(incluye.getProducto().getIdProducto())
						.nombreProducto(incluye.getProducto().getNombreProducto()).build())
				.tpAlmacenaje(incluye.getTpAlmacenaje()).build();
		return response;
	}

	private List<IncluyeResponse> transformIncluyesToIncluyesResponses(List<Incluye> incluyeList) {
		List<IncluyeResponse> responses = new ArrayList<>();
		incluyeList.forEach(incluye -> {
			responses.add(transformIncluyeToIncluyeResponse(incluye));
		});
		return responses;
	}

	@Override
	public List<Producto> getAllProducts(IncluyeAddedRequest request) {
		return repo.findAllProducts(request.getIdLista(), request.getAdded());
	}

	@Override
	public IncluyeResponse updateIncluye(IncluyeRequest request) {
		Incluye incluye = null;
		Optional<Incluye> optional = repo.findById(
				ProductoListaId.builder().idLista(request.getIdLista()).idProducto(request.getIdProducto()).build());
		if (optional.isPresent()) {
			incluye = optional.get();
			incluye.setAdded(request.getAdded());
			incluye.setCantidad(request.getCantidad());
			incluye.setTpAlmacenaje(request.getTpAlmacenaje());
			repo.save(incluye);
		}
		return transformIncluyeToIncluyeResponse(incluye);
	}

	@Override
	public IncluyeResponse insertProduct(IncluyeProdRequest request, Producto producto, Lista lista, TpAlmacenaje tpAlmacenaje) {
		Incluye incluye = request.transform(lista, producto, tpAlmacenaje);
		return transformIncluyeToIncluyeResponse(repo.save(incluye));
	}

	@Override
	public boolean deleteProduct(ProductoListaId id){
		try {
			repo.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}
		
	}

}
