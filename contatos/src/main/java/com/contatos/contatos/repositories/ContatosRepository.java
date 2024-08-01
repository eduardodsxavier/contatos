package com.contatos.contatos.repositories;

import com.contatos.contatos.entity.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ContatosRepository extends JpaRepository<Contato, Long> {

    List<Contato> findByName(String name);


}
