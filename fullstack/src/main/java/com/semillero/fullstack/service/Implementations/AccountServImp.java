package com.semillero.fullstack.service.Implementations;

import com.semillero.fullstack.clasess.Alert;
import com.semillero.fullstack.entity.Account;
import com.semillero.fullstack.repository.AccountRepository;
import com.semillero.fullstack.repository.TransactionRepository;
import com.semillero.fullstack.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class AccountServImp implements AccountService {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private TransactionRepository transactionRepository;



    @Override
    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public Account readAccount(Long accountId) {
        return accountRepository.findByAccountId(accountId);
    }

    @Override
    public Account updateAccount(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public boolean deleteAccount(Long accountId) {
        if (readAccount(accountId)!=null) {
            if (!transactionRepository.findAllByAccountId(accountId).isEmpty()){
                return false;
            }else {
                accountRepository.deleteById(accountId);
                return true;
            }
        }else {
            return true;
        }
    }


    @Override
    public ArrayList<Account> findAll() {
        return (ArrayList<Account>) accountRepository.findAll();
    }
}
