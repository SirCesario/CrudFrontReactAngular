package com.semillero.fullstack.service;

import com.semillero.fullstack.entity.Client;

import java.util.ArrayList;
import java.util.List;


public interface ClientService  {

    Client createClient(Client client) throws Exception;

    Client readClient(Long client)throws Exception;

    Client updateClient(Long clientId,Client client) throws Exception;
    boolean deleteClient(Long clientId) throws Exception;


    ArrayList <Client> findAll();
}
