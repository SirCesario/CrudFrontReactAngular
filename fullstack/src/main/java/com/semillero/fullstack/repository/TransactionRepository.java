package com.semillero.fullstack.repository;

import com.semillero.fullstack.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository <Transaction, Long>{

    Transaction findByTransactionId(Long transactionId);
    List <Transaction> findAllByAccountId(Long accountId);
}
