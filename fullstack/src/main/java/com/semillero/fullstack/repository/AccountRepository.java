package com.semillero.fullstack.repository;

import com.semillero.fullstack.entity.Account;
import com.semillero.fullstack.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {

    Account findByAccountId(Long accountId);

    ArrayList <Account> findAll();

    ArrayList <Account> findAllByClientId(Long clientId);
}
