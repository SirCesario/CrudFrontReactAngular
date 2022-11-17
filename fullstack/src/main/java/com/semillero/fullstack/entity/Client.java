package com.semillero.fullstack.entity;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.text.DateFormat;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "clients")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "clientId", nullable =false)
    private Long clientId;

    @Column(name = "typeid", nullable = false)
    private String typeId;

    @Column(name = "numberId", nullable = false)
    private Long numberId;

    @Column(name = "statusClient", nullable = false)
    private String statusClient;

    @Column(name = "typeClient", nullable = false)
    private String typeClient;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "phone", nullable = false)
    private String phone;

    @Column(name = "mail", nullable = false)
    private String mail;

    @Column(name = "firstName", nullable = false)
    private String firstName;

    @Column(name = "secondName", nullable = false)
    private String secondName;

    @Column(name = "firstLastName", nullable = false)
    private String firstLastName;

    @Column(name = "secondLastName", nullable = false)
    private String secondLastName;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Column(name = "birthday", nullable = false)
    private Date birthday;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Column(name = "creationDate", nullable =true)
    @UpdateTimestamp
    private Date creationDate;

    @Column(name = "userCreation", nullable = false)
    private String userCreation;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Column(name = "modificationDate",nullable= true)
    @UpdateTimestamp
    private Date modificationDate;

    @Column(name = "userModification", nullable = true)
    private String userModification;


    public Client() {

    }

    public Client(Long clientId) {
        this.clientId = clientId;
    }

    public Client(Long clientId, String typeId, Long numberId, String statusClient, String typeClient, String address, String phone, String mail, String firstName, String secondName, String firstLastName, String secondLastName, Date birthday, Date creationDate, String userCreation, Date modificationDate, String userModification) {
        this.clientId = clientId;
        this.typeId = typeId;
        this.numberId = numberId;
        this.statusClient = statusClient;
        this.typeClient = typeClient;
        this.address = address;
        this.phone = phone;
        this.mail = mail;
        this.firstName = firstName;
        this.secondName = secondName;
        this.firstLastName = firstLastName;
        this.secondLastName = secondLastName;
        this.birthday = birthday;
        this.creationDate = creationDate;
        this.userCreation = userCreation;
        this.modificationDate = modificationDate;
        this.userModification = userModification;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public String getTypeId() {
        return typeId;
    }

    public void setTypeId(String typeId) {
        this.typeId = typeId;
    }

    public Long getNumberId() {
        return numberId;
    }

    public void setNumberId(Long numberId) {
        this.numberId = numberId;
    }

    public String getStatusClient() {
        return statusClient;
    }

    public void setStatusClient(String statusClient) {
        this.statusClient = statusClient;
    }

    public String getTypeClient() {
        return typeClient;
    }

    public void setTypeClient(String typeClient) {
        this.typeClient = typeClient;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public String getFirstLastName() {
        return firstLastName;
    }

    public void setFirstLastName(String firstLastName) {
        this.firstLastName = firstLastName;
    }

    public String getSecondLastName() {
        return secondLastName;
    }

    public void setSecondLastName(String secondLastName) {
        this.secondLastName = secondLastName;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
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

    @OneToMany(targetEntity = Account.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "cl_fk", referencedColumnName = "clientId")
    private List <Account> accounts;

    public Client(Long clientId,  List <Account> accounts) {
        this.clientId = clientId;
        this.accounts = accounts;
    }

    public List<Account> getAccounts(){return accounts;}
    public void setAccounts(List<Account> accounts){this.accounts = accounts;}

    public ArrayList <Client> clients (){return clients();}
    public void setClients(ArrayList <Client> clients){}
    public void getClients(ArrayList <Client> clients){}
}
