package com.habitat.HABITAT.model.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.habitat.HABITAT.model.Categoria;
import com.habitat.HABITAT.model.Repositories.CategoriaRepository;

@RestController
@RequestMapping("/categoria")
@CrossOrigin("*")
public class CategoriaController {
	
	@Autowired
	private CategoriaRepository repository;
	
	@GetMapping("/todos")
	public ResponseEntity<List<Categoria>> buscarTodos(){
		List<Categoria> listaCategoria = repository.findAll();
		if (listaCategoria.isEmpty()) {
			return ResponseEntity.status(204).build();
		}
		else {
			return ResponseEntity.status(200).body(listaCategoria);
		}
	}

}
