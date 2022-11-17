package com.semillero.fullstack.repository;

import com.semillero.fullstack.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface ClientRepository extends JpaRepository <Client, Long> {
    Client findByClientId(Long clientId);
    ArrayList <Client> findAll();

}
