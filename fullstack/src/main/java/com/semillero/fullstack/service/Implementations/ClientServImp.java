package com.semillero.fullstack.service.Implementations;

import com.semillero.fullstack.clasess.ClientConnectedAccounts;
import com.semillero.fullstack.clasess.NotCreateOlderClient;
import com.semillero.fullstack.clasess.NotExistClient;
import com.semillero.fullstack.entity.Account;
import com.semillero.fullstack.entity.Client;
import com.semillero.fullstack.repository.AccountRepository;
import com.semillero.fullstack.repository.ClientRepository;
import com.semillero.fullstack.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;


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
               throw new NotCreateOlderClient("No se puede Crear un Cliente si es Menor de Edad");
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
    public Client readClient(Long clientId) throws Exception{
        if (clientRepository.existsById(clientId)){
            return clientRepository.findByClientId(clientId);
        }else {
            throw new NotExistClient("No existe un Cliente con ese Id");
        }
    }

    @Override
    public ArrayList<Client> findAll() {
        return clientRepository.findAll();
    }


    @Override
    public Client updateClient(Long clientId,Client client) throws Exception {
        if(clientRepository.existsById(clientId)){
            return clientRepository.save(client);
        }
        throw new NotExistClient("No se puede Actualizar Cliente con ese ID");
    }




    @Override
    public boolean deleteClient(Long clientId) throws Exception {
        ArrayList <Account> accounts = accountRepository.findAllByClientId(clientId);
        if (accounts.isEmpty()){
            clientRepository.deleteById(clientId);
        }
        throw new ClientConnectedAccounts("No se puede Eliminar un cliente si tiene Cuentas Activas");
    }

}
