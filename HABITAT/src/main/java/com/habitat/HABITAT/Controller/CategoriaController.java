package com.habitat.HABITAT.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.habitat.HABITAT.model.Categoria;

@RestController
@RequestMapping("/categoria")
@CrossOrigin("*")
public class CategoriaController {

	@Autowired
	private com.habitat.HABITAT.Repositories.CategoriaRepository repository;

	@GetMapping("/todos")
	public ResponseEntity<List<Categoria>> buscarTodos() {
		List<Categoria> listaCategoria = repository.findAll();
		if (listaCategoria.isEmpty()) {
			return ResponseEntity.status(204).build();
		} else {
			return ResponseEntity.status(200).body(listaCategoria);
		}
	}

	@GetMapping("/id/{id}")
	public ResponseEntity<Categoria> buscarId(@PathVariable long id) {
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}

	@GetMapping("/marcas/{marcas}")
	public ResponseEntity<List<Categoria>> buscarMarcas(@PathVariable String marcas) {
		return ResponseEntity.ok(repository.findAllByMarcasContainingIgnoreCase(marcas));
	}

	@GetMapping("/tipoProduto/{tipoProduto}")
	public ResponseEntity<List<Categoria>> buscarTipoProduto(@PathVariable String tipoProduto) {
		return ResponseEntity.ok(repository.findAllByTipoProdutoContainingIgnoreCase(tipoProduto));
	}

	@PostMapping
	public ResponseEntity<Categoria> postCategoria(@RequestBody Categoria categoria) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(categoria));
	}

	@PutMapping
	public ResponseEntity<Categoria> putCategoria (@RequestBody Categoria categoria){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(categoria));
	}
}

