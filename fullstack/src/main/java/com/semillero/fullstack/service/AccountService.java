package com.semillero.fullstack.service;

import com.semillero.fullstack.entity.Account;

import java.util.ArrayList;

public interface AccountService {

    Account createAccount(Account account);
    Account readAccount(Long accountId);
    Account updateAccount(Account account);
    boolean deleteAccount(Long accountId);
    ArrayList<Account> findAll();
}
