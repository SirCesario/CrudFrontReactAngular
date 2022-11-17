package com.semillero.fullstack.entity;


import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "transactions")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "transactionId",nullable = false)
    private Long transactionId;

    @Column(name = "accountId", nullable = false)
    private Long accountId;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "value", nullable = false)
    private BigDecimal value;

    @Column(name = "period", nullable = false)
    private String period;

    @Column(name = "status", nullable = false)
    private String status;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Column(name = "transactionDate", nullable = true)
    @UpdateTimestamp
    private Date transactionDate;


    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Column(name = "transactionCreation", nullable = true)
    @UpdateTimestamp
    private Date transactionCreation;

    @Column(name = "userCreation", nullable = false)
    private String userCreation;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Column(name = "modificationDate", nullable = true)
    @UpdateTimestamp
    private Date modificationDate;

    @Column(name = "userModification", nullable = false)
    private String userModification;

    public Transaction(Long transactionId) {
        this.transactionId = transactionId;
    }

    public Transaction() {

    }

    public Transaction(Long transactionId, Long accountId, String type, BigDecimal value, String period, String status, Date transactionDate, Date transactionCreation, String userCreation, Date modificationDate, String userModification) {
        this.transactionId = transactionId;
        this.accountId = accountId;
        this.type = type;
        this.value = value;
        this.period = period;
        this.status = status;
        this.transactionDate = transactionDate;
        this.transactionCreation = transactionCreation;
        this.userCreation = userCreation;
        this.modificationDate = modificationDate;
        this.userModification = userModification;
    }

    public Long getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(Long transactionId) {
        this.transactionId = transactionId;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public BigDecimal getValue() {
        return value;
    }

    public void setValue(BigDecimal value) {
        this.value = value;
    }

    public String getPeriod() {
        return period;
    }

    public void setPeriod(String period) {
        this.period = period;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(Date transactionDate) {
        this.transactionDate = transactionDate;
    }

    public Date getTransactionCreation() {
        return transactionCreation;
    }

    public void setTransactionCreation(Date transactionCreation) {
        this.transactionCreation = transactionCreation;
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

    @ManyToMany(targetEntity = Account.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "tc_fk", referencedColumnName = "accountId")
    private List<Account> accounts;

    public Transaction(Long transactionId, List<Account> accounts){
        this.transactionId = transactionId;
        this.accounts = accounts;
    }

}
