package com.semillero.fullstack.clasess;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class NotExistClient extends Exception{
    public NotExistClient (String message){
        super(message);
    }
}
