package com.semillero.fullstack.service.Implementations;

import com.semillero.fullstack.entity.Account;
import com.semillero.fullstack.entity.Client;
import com.semillero.fullstack.repository.AccountRepository;
import com.semillero.fullstack.repository.ClientRepository;
import com.semillero.fullstack.service.ClientService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class ClientServImp implements ClientService {

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private AccountRepository accountRepository;


    @Override
    public Client createClient (Client client) throws Exception {
           if (this.OlderClient(client)) {
               return clientRepository.save(client);
           }else {
               throw new Exception("Cliente menor de edad");
           }

    }

    public boolean OlderClient (Client client){
        LocalDate today = LocalDate.now();
        int age = (today.getYear() - (1900 + client.getBirthday().getYear()));
        if (age >= 18) {
            System.out.println(age);
            return true;
        }
        return false;
    }


    @Override
    public Client readClient(Long client) {
        return clientRepository.findByClientId(client);
    }


    @Override
    public ArrayList<Client> findAll() {
        return clientRepository.findAll();
    }


    @Override
    public Client updateClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public boolean deleteClient(Long clientId) {
        Logger logger = LoggerFactory.getLogger(ClientServImp.class);
        ArrayList <Account> accounts = accountRepository.findAllByClientId(clientId);
        if (accounts.size() == 1) {
            clientRepository.deleteById(clientId);
        }return true;
    }




}
