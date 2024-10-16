package gf.grocerlist.back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import gf.grocerlist.back.services.ListaService;

@RestController
public class ListController {

	@Autowired
	ListaService service;
	
	
	
}
