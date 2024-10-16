package gf.grocerlist.back.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gf.grocerlist.back.entities.TpAlmacenaje;
import gf.grocerlist.back.repositories.TpAlmacenajeRepository;

@Service
public class TpAlmacenajeServiceImpl implements TpAlmacenajeService{

	@Autowired
	private TpAlmacenajeRepository repo;

	@Override
	public List<TpAlmacenaje> getAll() {
		return repo.findAll();
	}

	@Override
	public TpAlmacenaje getById(Long id) {
		Optional<TpAlmacenaje> optional = repo.findById(id);
		if(optional.isPresent()) {
			return optional.get();
		}else {
			return null;
		}
	}
	
	
	
}
