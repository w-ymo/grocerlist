package gf.grocerlist.back.services;

import java.util.List;

import gf.grocerlist.back.entities.TpAlmacenaje;

public interface TpAlmacenajeService {

	List<TpAlmacenaje> getAll();
	TpAlmacenaje getById(Long id);
	
}
