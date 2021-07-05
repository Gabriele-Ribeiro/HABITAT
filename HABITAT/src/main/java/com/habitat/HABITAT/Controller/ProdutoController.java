package com.habitat.HABITAT.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.habitat.HABITAT.model.Produto;

@RestController
@RequestMapping("/produto")
@CrossOrigin("*")
public class ProdutoController {
	
	@Autowired
	private com.habitat.HABITAT.Repositories.ProdutoRepository repository;

	
	@GetMapping("/id/{id}")
	public ResponseEntity<Produto> buscarId(@PathVariable long id) {
		return repository.findById(id)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}

	@GetMapping("/nomeProduto/{nomeProduto}")
	public ResponseEntity<List<Produto>> nomeProduto(@PathVariable String nomeProduto) {
		return ResponseEntity.ok(repository.findAllByNomeProdutoContainingIgnoreCase(nomeProduto));
	}

	@GetMapping("/preco/{preco}")
	public ResponseEntity<List<Produto>> buscarPreco(@PathVariable double preco) {
		return ResponseEntity.ok(repository.findAllByPreco(preco));
	}
	
	@PostMapping
	public ResponseEntity<Produto> postProduto (@RequestBody Produto produto){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(produto));
	}
	
	@PutMapping
	public ResponseEntity<Produto> putCategoria (@RequestBody Produto produto){
		return ResponseEntity.status(HttpStatus.OK).body(produto);
	}
	
	@DeleteMapping ("/id/{id}")
		public void deletarProduto (@PathVariable long id) {
		repository.deleteById(id);
	}
}
