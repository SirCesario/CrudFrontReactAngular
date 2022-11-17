package com.semillero.fullstack.clasess;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ClientConnectedAccounts extends Exception{
    public ClientConnectedAccounts (String message){
        super(message);
    }
}
