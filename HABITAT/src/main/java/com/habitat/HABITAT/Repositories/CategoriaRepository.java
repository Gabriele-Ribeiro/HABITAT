package com.habitat.HABITAT.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.habitat.HABITAT.model.Categoria;
import com.habitat.HABITAT.model.Usuario;

@Repository
public interface CategoriaRepository extends JpaRepository <Categoria, Long>{

	public List <Categoria> findAllByMarcasContainingIgnoreCase(String marcas);
	public List <Categoria> findAllByTipoProdutoContainingIgnoreCase(String tipoProduto);
}

