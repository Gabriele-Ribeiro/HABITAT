-- MySQL Script generated by MySQL Workbench
-- Tue Jun 22 15:42:11 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`tb_usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_usuarios` (
  `id_usuarios` INT NOT NULL AUTO_INCREMENT,
  `tipo` ENUM('Vendedor', 'Comprador') NOT NULL,
  `nome` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_usuarios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_categoria` (
  `id_categoria` INT NOT NULL AUTO_INCREMENT,
  `tipo_produto` VARCHAR(255) NOT NULL,
  `recomendacao` VARCHAR(255) NOT NULL,
  `marcas` VARCHAR(255) NOT NULL,
  `fk_produtos` INT NOT NULL,
  PRIMARY KEY (`id_categoria`),
  INDEX `fk_tb_categoria_tb_produtos1_idx` (`fk_produtos` ASC) VISIBLE,
  CONSTRAINT `fk_tb_categoria_tb_produtos1`
    FOREIGN KEY (`fk_produtos`)
    REFERENCES `mydb`.`tb_produtos` (`id_produtos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_produto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome_produto` VARCHAR(255) NOT NULL,
  `descricao` VARCHAR(255) NOT NULL,
  `preco` DECIMAL NOT NULL,
  `forma_pagamento` VARCHAR(255) NOT NULL,
  `tb_usuarios_id_tb_usuarios` INT NOT NULL,
  PRIMARY KEY (`id`, `tb_usuarios_id_tb_usuarios`),
  INDEX `fk_tb_produto_tb_usuarios1_idx` (`tb_usuarios_id_tb_usuarios` ASC) VISIBLE,
  CONSTRAINT `fk_tb_produto_tb_usuarios1`
    FOREIGN KEY (`tb_usuarios_id_tb_usuarios`)
    REFERENCES `mydb`.`tb_usuarios` (`id_tb_usuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_produto_has_tb_categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_produto_has_tb_categoria` (
  `tb_produto_id` INT NOT NULL,
  `tb_categoria_id_categoria` INT NOT NULL,
  PRIMARY KEY (`tb_produto_id`, `tb_categoria_id_categoria`),
  INDEX `fk_tb_produto_has_tb_categoria_tb_categoria1_idx` (`tb_categoria_id_categoria` ASC) VISIBLE,
  INDEX `fk_tb_produto_has_tb_categoria_tb_produto1_idx` (`tb_produto_id` ASC) VISIBLE,
  CONSTRAINT `fk_tb_produto_has_tb_categoria_tb_produto1`
    FOREIGN KEY (`tb_produto_id`)
    REFERENCES `mydb`.`tb_produto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_produto_has_tb_categoria_tb_categoria1`
    FOREIGN KEY (`tb_categoria_id_categoria`)
    REFERENCES `mydb`.`tb_categoria` (`id_categoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_usuarios` (
  `id_usuarios` INT NOT NULL AUTO_INCREMENT,
  `tipo` ENUM('Vendedor', 'Comprador') NOT NULL,
  `nome` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_usuarios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_produtos` (
  `id_produtos` INT NOT NULL AUTO_INCREMENT,
  `nome_produto` VARCHAR(255) NOT NULL,
  `descricao` VARCHAR(255) NOT NULL,
  `preco` DECIMAL NOT NULL,
  `forma_pagamento` VARCHAR(45) NOT NULL,
  `fk_usuario_criador` INT NOT NULL,
  PRIMARY KEY (`id_produtos`, `fk_usuario_criador`),
  INDEX `fk_tb_produtos_tb_usuarios1_idx` (`fk_usuario_criador` ASC) VISIBLE,
  CONSTRAINT `fk_tb_produtos_tb_usuarios1`
    FOREIGN KEY (`fk_usuario_criador`)
    REFERENCES `mydb`.`tb_usuarios` (`id_usuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_categoria` (
  `id_categoria` INT NOT NULL AUTO_INCREMENT,
  `tipo_produto` VARCHAR(255) NOT NULL,
  `recomendacao` VARCHAR(255) NOT NULL,
  `marcas` VARCHAR(255) NOT NULL,
  `fk_produtos` INT NOT NULL,
  PRIMARY KEY (`id_categoria`),
  INDEX `fk_tb_categoria_tb_produtos1_idx` (`fk_produtos` ASC) VISIBLE,
  CONSTRAINT `fk_tb_categoria_tb_produtos1`
    FOREIGN KEY (`fk_produtos`)
    REFERENCES `mydb`.`tb_produtos` (`id_produtos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
