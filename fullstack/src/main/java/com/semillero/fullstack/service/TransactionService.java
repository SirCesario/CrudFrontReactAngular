package com.semillero.fullstack.service;

import com.semillero.fullstack.entity.Transaction;

import java.lang.reflect.Array;
import java.util.ArrayList;

public interface TransactionService {

    Transaction createTransaction(Transaction transaction);
    Transaction readTransaction(Long transactionId);
    Transaction updateTransaction(Transaction transaction);
    boolean deleteTransaction(Long transactionId);
    Transaction readAllTransactionsByAccountId(Long accountId);

    ArrayList<Transaction> findAll();
}
