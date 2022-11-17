package com.semillero.fullstack.controller;


import com.semillero.fullstack.clasess.NotExistClient;
import com.semillero.fullstack.entity.Client;
import com.semillero.fullstack.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.semillero.fullstack.clasess.Alert;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class ClientController {

    @Autowired
    ClientService clientService;


    @PostMapping("/client")
    @ResponseBody
    public ResponseEntity <Object> createClient(@RequestBody Client client) throws Exception {
        Object response;
        HttpStatus status = null;
        String message = null;
        try {
            response = clientService.createClient(client);
            if (response != null) {
                status = HttpStatus.CREATED;
                message = "Cliente Creado Correctamente";
                return ResponseEntity.status(status).body(message);
            }
        } catch (Exception e) {
            status = HttpStatus.BAD_REQUEST;
            System.out.println(e.getMessage());
            return ResponseEntity.status(status).body(e.getMessage());
        }
        return null;
    }

    @GetMapping("/client/{clientId}")
    @ResponseBody
    public  ResponseEntity <Object> readClient(@PathVariable("clientId") Long clientId) throws Exception{
        Object response = null;
        HttpStatus status = null;
        String message = null;
        try {
            response = clientService.readClient(clientId);
            status = HttpStatus.OK;
            message = "Cliente Encontrado";
            return ResponseEntity.status(status).body(response);
        }catch (Exception e){
            status = HttpStatus.BAD_REQUEST;
            System.out.println(e.getMessage());
            return ResponseEntity.status(status).body(e.getMessage());
        }
    }


   @GetMapping("clients")
   ArrayList <Client> getClients(){
        return clientService.findAll();
   }


    @PutMapping("/client/{clientId}")
    @ResponseBody
    public ResponseEntity <Object> updateClient(@PathVariable(name = "clientId") Long clientId,@RequestBody Client client) throws NotExistClient {
        HttpStatus status = null;
        String message = null;
        Object response = null;
       try {
           client.setClientId(clientId);
           Client client1 = this.clientService.updateClient(clientId,client);
           if(client1 != null){
               return ResponseEntity.status(HttpStatus.ACCEPTED).body(client1);
           }
       } catch (Exception e) {
           status = HttpStatus.BAD_REQUEST;
           System.out.println(e.getMessage());
           return ResponseEntity.status(status).body(e.getMessage());
       }
       return null;
    }

    @DeleteMapping("/client/{clientId}")
    @ResponseBody
    public ResponseEntity <Object> deleteClient(@PathVariable ("clientId") Long clientId) {
        Object response = null;
        HttpStatus status = null;
        String message = null;
        try {
            if (clientService.deleteClient(clientId)) {
                return ResponseEntity.status(HttpStatus.ACCEPTED).body(new Alert("El cliente con el ID" + " " + clientId + " " + "fue eliminado correctamente"));
            }
        } catch (Exception e) {
            status = HttpStatus.BAD_REQUEST;
            System.out.println(e.getMessage());
            return ResponseEntity.status(status).body(e.getMessage());
        }
        return  null;
    }

}
