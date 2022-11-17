package com.semillero.fullstack.clasess;

import com.semillero.fullstack.entity.Account;
import com.semillero.fullstack.entity.Client;


import java.time.LocalDate;
import java.util.List;


public  class MethodClient {

    public static boolean OlderClient (Client client){
        LocalDate today = LocalDate.now();
        int age = (today.getYear() - (1900 + client.getBirthday().getYear()));
        if (age >= 18) {
            System.out.println(age);
            return true;
        }
        return false;
    }

}
