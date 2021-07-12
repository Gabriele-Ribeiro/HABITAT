package com.habitat.HABITAT.Controller;

import java.util.List;
import java.util.Optional;

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

import com.habitat.HABITAT.Service.UsuarioService;
import com.habitat.HABITAT.model.Usuario;
import com.habitat.HABITAT.model.UsuarioLogin;

@RestController
@RequestMapping("/usuario")
@CrossOrigin("*")
public class UsuarioController {

	@Autowired
	private com.habitat.HABITAT.Repositories.UsuarioRepository repository;

	@Autowired
	private UsuarioService usuarioService;

	@GetMapping("/todos")
	public ResponseEntity<List<Usuario>> GetAll() {
		return ResponseEntity.ok(repository.findAll());
	}

	@GetMapping("/id/{id}")
	public ResponseEntity<Usuario> buscarId(@PathVariable long id) {
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}

	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<Usuario>> buscarNome(@PathVariable String nome) {
		return ResponseEntity.ok(repository.findByNomeContainingIgnoreCase(nome));
	}

	@GetMapping("/email/{email}")
	public ResponseEntity<Optional<Usuario>> buscarEmail(@PathVariable String email) {
		return ResponseEntity.ok(repository.findByEmail(email));
	}

	@PostMapping("/cadastrar")
	public ResponseEntity<Usuario> postCadastrar(@RequestBody Usuario usuario) {
		return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.CadastrarUsuario(usuario));

	}

	@PostMapping("/logar")
	public ResponseEntity<UsuarioLogin> postLogin(@RequestBody Optional<UsuarioLogin> usuario) {
		return usuarioService.Logar(usuario).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());

	}

	@PutMapping
	public ResponseEntity<Usuario> putUsuario(@RequestBody Usuario usuario) {
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(usuario));
	}

	@DeleteMapping("/id/{id}")
	public void deletarUsuario(@PathVariable long id) {
		repository.deleteById(id);
	}
}
