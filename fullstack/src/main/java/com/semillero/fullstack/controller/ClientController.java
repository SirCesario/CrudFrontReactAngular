package com.semillero.fullstack.controller;


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

//            } else {
//                status = HttpStatus.BAD_REQUEST;
//                message = "No se puede crear un cliente si es menor de edad ";
//                return ResponseEntity.status(status).body(message);
//            }
        } catch (Exception e) {
            status = HttpStatus.BAD_REQUEST;
            System.out.println(e.getMessage());
            return ResponseEntity.status(status).body(e.getMessage());

        }
        return null;
    }

    @GetMapping("/client/{clientId}")
    @ResponseBody
    public  ResponseEntity <Object> readClient(@PathVariable("clientId") Long clientId){
        Object response = null;
        HttpStatus status = null;
        String message = null;
        try {
            response = clientService.readClient(clientId);
            if (response!= null) {
                status = HttpStatus.OK;
                message = "Cliente Encontrado";
                return ResponseEntity.status(status).body(message);
            }else {
                status = HttpStatus.NOT_FOUND;
                message = "No se encontró ningun cliente con ese ID";
                return ResponseEntity.status(status).body(message);
            }
        }catch (Exception e) {
        System.out.println(e.getMessage());
            return null;
        }
    }


   @GetMapping("clients")
   ArrayList <Client> getClients(){
        return clientService.findAll();
   }





    @PutMapping("/client/{clientId}")
    @ResponseBody
    public ResponseEntity <Object> updateClient(@PathVariable(name = "clientId") Long clientId,@RequestBody Client client){
        HttpStatus status = null;
        String message = null;
        Object response = null;
       try {
           client.setClientId(clientId);
           Client clientNew = this.clientService.updateClient(client);
           if (clientNew != null)
           return ResponseEntity.status(HttpStatus.ACCEPTED).body(new Alert("Cliente Actualizado correctamente"));
           else {
               return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new Alert("No se puede actualizar Cliente"));
           }
       }catch (Exception e) {
       return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new Alert("No es posible procesar su solicitud"));
       }
   }

    @DeleteMapping("/client/{clientId}")
    @ResponseBody
    public ResponseEntity <Object> deleteClient(@PathVariable ("clientId") Long clientId){
        Object response = null;
        HttpStatus status = null;
        String message = null;
        try {
            if (clientService.deleteClient(clientId)) {
                return ResponseEntity.status(HttpStatus.ACCEPTED).body(new Alert("El cliente con el ID" + " " + clientId + " " + "fue eliminado correctamente"));
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new Alert("No se puede eliminar un cliente si tiene cuentas Activas"));
            }
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;

        }




    }









}
