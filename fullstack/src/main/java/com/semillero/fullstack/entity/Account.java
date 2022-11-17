package com.semillero.fullstack.entity;


import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "accountId", nullable = false)
    private Long accountId;

    @Column(name = "clientId", nullable = false)
    Long clientId;

    @Column(name = "product", nullable = false)
    String product;

    @Column(name = "statusAccount", nullable = false)
    String statusAccount;

    @Column(name = "creditValue", nullable = false)
    String creditValue;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Column(name = "openDate", nullable = true)
    @UpdateTimestamp
    Date openDate;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Column(name = "creationDate", nullable = true)
    @UpdateTimestamp
    Date creationDate;

    @Column(name = "userCreation", nullable = false)
    String userCreation;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Column(name = "modificationDate", nullable = true)
    @UpdateTimestamp
    Date modificationDate;

    @Column(name = "userModification", nullable = true)
    String userModification;


    public Account(Long accountId) {
        this.accountId = accountId;
    }

    public Account() {

    }

    public Account(Long accountId, Long clientId, String product, String statusAccount, String creditValue, Date openDate, Date creationDate, String userCreation, Date modificationDate, String userModification) {
        this.accountId = accountId;
        this.clientId = clientId;
        this.product = product;
        this.statusAccount = statusAccount;
        this.creditValue = creditValue;
        this.openDate = openDate;
        this.creationDate = creationDate;
        this.userCreation = userCreation;
        this.modificationDate = modificationDate;
        this.userModification = userModification;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public String getStatusAccount() {
        return statusAccount;
    }

    public void setStatusAccount(String statusAccount) {
        this.statusAccount = statusAccount;
    }

    public String getCreditValue() {
        return creditValue;
    }

    public void setCreditValue(String creditValue) {
        this.creditValue = creditValue;
    }

    public Date getOpenDate() {
        return openDate;
    }

    public void setOpenDate(Date openDate) {
        this.openDate = openDate;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public String getUserCreation() {
        return userCreation;
    }

    public void setUserCreation(String userCreation) {
        this.userCreation = userCreation;
    }

    public Date getModificationDate() {
        return modificationDate;
    }

    public void setModificationDate(Date modificationDate) {
        this.modificationDate = modificationDate;
    }

    public String getUserModification() {
        return userModification;
    }

    public void setUserModification(String userModification) {
        this.userModification = userModification;
    }

    @OneToMany(targetEntity = Transaction.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "at_fk", referencedColumnName = "accountId")
    private List<Transaction> transactions;

    public List<Transaction> getTransactions(){return transactions;}
    public void setTransactions(List<Transaction> transactions){this.transactions = transactions;}
    public ArrayList <Account> accounts(){return accounts();}
    public void setAccounts(ArrayList <Account> accounts){}
    public void getAccounts(ArrayList <Account> accounts){}


}
