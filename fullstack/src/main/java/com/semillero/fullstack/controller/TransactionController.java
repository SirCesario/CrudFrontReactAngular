package com.semillero.fullstack.controller;

import com.semillero.fullstack.entity.Account;
import com.semillero.fullstack.entity.Transaction;
import com.semillero.fullstack.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class TransactionController {

    @Autowired
    TransactionService transactionService;

    @PostMapping("/transaction")
    @ResponseBody
    public ResponseEntity <Object> createTransaction(@RequestBody Transaction transaction) {
        Object response = null;
        HttpStatus status = null;
        String message = null;
        try {
            response = transactionService.createTransaction(transaction);
            if (response != null) {
                status = HttpStatus.CREATED;
                message = "Movimiento creado satisfactoriamente";
                return ResponseEntity.status(status).body(message);
            } else {
                status = HttpStatus.BAD_REQUEST;
                message = "El movimiento no pudo ser creado";
                return ResponseEntity.status(status).body(message);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @GetMapping("/transaction/{transactionId}")
    @ResponseBody
    public ResponseEntity<Object> readTransaction(@PathVariable() Long transactionId) {
        Object response = null;
        HttpStatus status = null;
        String message = null;
        try {
            response = transactionService.readTransaction(transactionId);
            if (response != null) {
                status = HttpStatus.OK;
                message = "Movimiento encontrado satisfactoriamente";
                return ResponseEntity.status(status).body(message);
            } else {
                status = HttpStatus.BAD_REQUEST;
                message = "El movimiento con el id " +transactionId+ " no se encuentra registrado";
                return ResponseEntity.status(status).body(transactionId);
            }
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping("/transactions")
    ArrayList<Transaction> getTransactions(){return transactionService.findAll();}


    @GetMapping("/transaction/account/{accountId}")
    @ResponseBody
    public ResponseEntity<Object> readAll(@PathVariable Long accountId) {
        Object response = null;
        HttpStatus status = null;
        String message = null;
        try {
            response = transactionService.readAllTransactionsByAccountId(accountId);
            if (response != null) {
                status = HttpStatus.OK;
                message = "Lista de movimientos encontrada satisfactoriamente";
                return ResponseEntity.status(HttpStatus.OK).body(message);
            } else {
                status = HttpStatus.BAD_REQUEST;
                message = "No se pudo encontrar ningun cmovimiento asociado con el id " +accountId+ " de la cuenta";
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(message);
            }
        } catch (Exception e) {
            return null;
        }
    }


    @PutMapping("/transaction/{transactionId}")
    @ResponseBody
    public ResponseEntity<Object> updateTransaction(@PathVariable(name = "transactionId") Long transactionId, @RequestBody Transaction transaction) {

        try {
            transaction.setTransactionId(transactionId);
            Transaction transactionNew = this.transactionService.updateTransaction(transaction);
            if (transactionNew != null)
                return ResponseEntity.status(HttpStatus.ACCEPTED).body(transactionNew);
            else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new Error("No se puede actualizar el movimiento"));
            }
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new Error(ex.getMessage()));
        }

    }

    @DeleteMapping("/transaction/{transactionId}")
    @ResponseBody
    public ResponseEntity deleteTransaction (@PathVariable("transactionId") Long transactionId) {
        try {
            if (transactionService.deleteTransaction(transactionId)) {
                return ResponseEntity.status(HttpStatus.ACCEPTED).body("Movimiento eliminado satisfactoriamente");
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("El movimiento con el id " +transactionId+ " no pudo ser eliminado");
            }
        } catch (Exception e) {
            return null;
        }
    }





















    }
