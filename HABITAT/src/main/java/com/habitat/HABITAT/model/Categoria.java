package com.habitat.HABITAT.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import com.sun.istack.NotNull;

@Entity
@Table(name = "Categoria")
public class Categoria {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotNull
	@Size(min = 5, max = 100)
	private String tipoProduto;

	@NotNull
	@Size(min = 5, max = 100)
	private String recomendacoes;

	@NotNull
	@Size(min = 5, max = 100)
	private String marcas;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTipoProduto() {
		return tipoProduto;
	}

	public void setTipoProduto(String tipoProduto) {
		this.tipoProduto = tipoProduto;
	}

	public String getRecomendacoes() {
		return recomendacoes;
	}

	public void setRecomendacoes(String recomendacoes) {
		this.recomendacoes = recomendacoes;
	}

	public String getMarcas() {
		return marcas;
	}

	public void setMarcas(String marcas) {
		this.marcas = marcas;
	}
}