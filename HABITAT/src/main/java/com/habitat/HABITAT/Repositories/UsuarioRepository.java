package com.habitat.HABITAT.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.habitat.HABITAT.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	public List<Usuario> findByNomeContainingIgnoreCase(String nome);

	public List<Usuario> findByEmail(String email);

}
