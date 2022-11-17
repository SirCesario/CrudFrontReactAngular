export interface Cuenta {
    accountId?:number;
    clientId:number;
    product: "..." |"Credito" | "Prestamo"| "Ahorro";
    statusAccount:"..." |"Activa" | "Inactiva";
    creditValue:string;
    openDate:string;
    creationDate:string;
    userCreation:string;
    modificationDate:string;
    userModification?:string;

}