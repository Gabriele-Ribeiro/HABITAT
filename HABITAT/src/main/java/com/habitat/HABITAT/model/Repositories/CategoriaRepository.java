package com.habitat.HABITAT.model.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.habitat.HABITAT.model.Categoria;

@Repository
public interface CategoriaRepository extends JpaRepository <Categoria, Long>{

	List<Categoria> findAll();

}
