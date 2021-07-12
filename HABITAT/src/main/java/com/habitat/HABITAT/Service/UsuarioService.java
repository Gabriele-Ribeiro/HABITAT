package com.habitat.HABITAT.Service;

import java.nio.charset.Charset;
import java.util.Optional;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.habitat.HABITAT.Repositories.UsuarioRepository;
import com.habitat.HABITAT.model.Usuario;
import com.habitat.HABITAT.model.UsuarioLogin;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository repository;
	
	public Usuario CadastrarUsuario(Usuario usuario) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		String senhaEncoder = encoder.encode(usuario.getSenha());
		usuario.setSenha(senhaEncoder);
		
		return repository.save(usuario);
		
		}
	
	public Optional<UsuarioLogin> Logar(Optional<UsuarioLogin>user){
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
	    Optional<Usuario> usuario = repository.findByEmail(user.get().getEmail());
	    
	    if(usuario.isPresent()) {
			if(encoder.matches(user.get().getSenha(), usuario.get().getSenha())) {
			
				String auth = user.get().getEmail() + ":" + user.get().getSenha();
				byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
				
				String authHeader = "Basic " + new String(encodedAuth);
				
				user.get().setToken(authHeader);
				user.get().setNome(usuario.get().getEmail());
				user.get().setSenha(usuario.get().getSenha());
				
				return user;
			}
	    
	    }
	    
	    return null;
	}
}
