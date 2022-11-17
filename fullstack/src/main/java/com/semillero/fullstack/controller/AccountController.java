package com.semillero.fullstack.controller;

import com.semillero.fullstack.clasess.Alert;
import com.semillero.fullstack.entity.Account;
import com.semillero.fullstack.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class AccountController {

    @Autowired
    AccountService accountService;

    @PostMapping("/account")
    @ResponseBody
    public ResponseEntity <Object> createAccount(@RequestBody Account account) {
        Object response = null;
        HttpStatus status = null;
        String message = null;
        try {
            response = accountService.createAccount(account);
            if (response != null) {
                status = HttpStatus.CREATED;
                message = "Cuenta Creada Correctamente";
                return ResponseEntity.status(status).body(message);
            }else {
                status = HttpStatus.BAD_REQUEST;
                message = "No se puedo crear la Cuenta";
                return ResponseEntity.status(status).body(message);
            }
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }

    }

    @GetMapping("/account/{accountId}")
    @ResponseBody
    public ResponseEntity <Object> readAccount (@PathVariable ("accountId")Long accountId){
        Object response = null;
        HttpStatus status = null;
        String message = null;
        try {
            response = accountService.readAccount(accountId);
            if (response != null) {
                status = HttpStatus.OK;
                message = "Cuenta Encontrada en el servidor";
                return ResponseEntity.status(status).body(message);
            } else {
                status = HttpStatus.BAD_REQUEST;
                message = "No hay Cuentas Registradas con ese ID";
                return ResponseEntity.status(status).body(message);
            }

        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
            }
        }

    @GetMapping("/accounts")
    ArrayList <Account> getAccounts(){return accountService.findAll();}


    @PutMapping("/account/{accountId}")
    @ResponseBody
    public ResponseEntity <Object> updateAccount(@PathVariable(name = "accountId") Long accountId,@RequestBody Account account) {
        Object response = null;
        HttpStatus status = null;
        String message = null;
        try {

            account.setAccountId(accountId);
            Account accountNew = this.accountService.updateAccount(account);
            if (accountNew != null) {
                status = HttpStatus.ACCEPTED;
                message = "Se Actualizo la Cuenta de Manera Correcta";
                return ResponseEntity.status(status).body(message);
            } else {
                status = HttpStatus.BAD_REQUEST;
                message = "No se puede procesar su solicitud";
                return ResponseEntity.status(status).body(message);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }


    @DeleteMapping("/account/{accountId}")
    @ResponseBody
    public ResponseEntity deleteAccount (@PathVariable ("accountId")Long accountId) {
        HttpStatus status = null;
        String message = null;
        try {
            if(accountService.deleteAccount(accountId)){
                return ResponseEntity.status(HttpStatus.ACCEPTED).body(new Alert("Cuenta Eliminada correctamente"));
            }else{
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new Alert("No se puede eliminar la Cuenta"));
            }
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }
















}
