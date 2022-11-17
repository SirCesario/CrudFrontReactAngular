package com.semillero.fullstack.service;

import com.semillero.fullstack.entity.Client;

import java.util.ArrayList;
import java.util.List;


public interface ClientService  {

    Client createClient(Client client) throws Exception;

    Client readClient(Long client);

    Client updateClient(Client client);
    boolean deleteClient(Long clientId);


    ArrayList <Client> findAll();
}
