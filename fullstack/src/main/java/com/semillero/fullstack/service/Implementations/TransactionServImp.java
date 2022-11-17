package com.semillero.fullstack.service.Implementations;

import com.semillero.fullstack.entity.Transaction;
import com.semillero.fullstack.repository.TransactionRepository;
import com.semillero.fullstack.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class TransactionServImp implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;


    @Override
    public Transaction createTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    @Override
    public Transaction readTransaction(Long transactionId) {
        return transactionRepository.findByTransactionId(transactionId);
    }

    @Override
    public Transaction readAllTransactionsByAccountId(Long accountId) {
        return (Transaction) transactionRepository.findAllByAccountId(accountId);
    }

    @Override
    public ArrayList<Transaction> findAll() {
        return (ArrayList<Transaction>) transactionRepository.findAll();
    }


    @Override
    public Transaction updateTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }


    @Override
    public boolean deleteTransaction(Long transactionId) {
        if (transactionRepository.findByTransactionId(transactionId).getStatus().equalsIgnoreCase("Activo")){
            return false;
        }else {
            transactionRepository.deleteById(transactionId);
            return true;
        }
    }


}
