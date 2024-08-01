package com.contatos.contatos.controllers;

import com.contatos.contatos.entity.Contato;
import com.contatos.contatos.repositories.ContatosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value ="contatos")
public class ContatosController {

    @Autowired
    private ContatosRepository repository;

    @GetMapping
    public List<Contato> findAll(){
        List<Contato> result = repository.findAll();
        return result;
    }

    @GetMapping(value ="/{name}")
    public ResponseEntity<List<Contato>> findByName(@RequestParam String name){
        return new ResponseEntity<List<Contato>>(repository.findByName(name), HttpStatus.OK);

    }


}


