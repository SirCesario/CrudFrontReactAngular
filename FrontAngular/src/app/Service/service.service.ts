import { Account } from './../Modelo/Account';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Person } from '../Modelo/Person';
import { Observable } from 'rxjs';
import { Transaction } from '../Modelo/Transaction';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private httpClient:HttpClient) {}

  // Url para para consumir EndPoint GET //
  private UrlGet="http://localhost:8080/api/clients";

  // Url para consumir EndPoint POST / DEL / UPDATE //
   private Url = "http://localhost:8080/api/client";

  // Url para listar todas las Cuentas
   private UrlGetCuentas="http://localhost:8080/api/accounts";

  // Url Para consumir EndPoints de Cuentas POST , DEL , UPDATE //
   private UrlCuenta="http://localhost:8080/api/account";

   private UrlMovimientos="http://localhost:8080/api/transaction";
   private UrlGetMovimientos="http://localhost:8080/api/transactions";




      getClientes():Observable<Person[]>{
        return this.httpClient.get<Person[]>(`${this.UrlGet}`);
      }

      registrarCliente(client: Person): Observable<Object>{
        return this.httpClient.post(`${this.Url}`, client);

      }

      traerClienteById(clientId: number): Observable<Person>{
        return this.httpClient.get<Person>(`${this.Url}/${clientId}`);
      }

      putCliente(clientId: number, client: Person): Observable<Object>{
        return this.httpClient.put(`${this.Url}/${clientId}`,client)
      }

      deletecliente(clientId: number): Observable<Object>{
        return this.httpClient.delete(`${this.Url}/${clientId}`);
      }

      getCuentas():Observable<Account[]>{
        return this.httpClient.get<Account[]>(`${this.UrlGetCuentas}`);
      }

      postCuenta(account: Account): Observable<Object> {
        return this.httpClient.post(`${this.UrlCuenta}`, account);
      }

      traerCuentaById(accountId: number): Observable<Account>{
        return this.httpClient.get<Account>(`${this.UrlCuenta}/${accountId}`);
      }

      putCuenta(accountId: number, account: Account): Observable<Object>{
        return this.httpClient.put(`${this.UrlCuenta}/${accountId}`,account)
      }

      deleteCuenta(accountId: number): Observable<Object>{
        return this.httpClient.delete(`${this.UrlCuenta}/${accountId}`)
      }

      traerMovimientoById(transactionId: number): Observable<Transaction>{
        return this.httpClient.get<Transaction>(`${this.UrlMovimientos}/${transactionId}`)
      }

      getMovimientos(): Observable<Transaction[]>{
        return this.httpClient.get<Transaction[]>(`${this.UrlGetMovimientos}`);
      }

      postMovimiento(transaction: Transaction): Observable<Object>{
        return this.httpClient.post(`${this.UrlMovimientos}`, transaction);
      }

      putMovimiento(transactionId: number, transaction: Transaction): Observable<Object>{
        return this.httpClient.put(`${this.UrlMovimientos}/${transactionId}`, transaction)
      }

      deleteMovimiento(transactionId: number): Observable<Object>{
        return this.httpClient.delete(`${this.UrlMovimientos}/${transactionId}`)
      }


  }

