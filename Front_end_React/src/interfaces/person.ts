export interface Person{
    clientId?:number;
    typeId: "..." |"CC" | "NIT" | "CE";
    numberId:number;
    typeClient: "..." |"Natural" | "Juridica";
    address:string;
    phone:string;
    mail:string;
    statusClient: "..." |"Activo" | "Inactivo";
    firstName:string;
    secondName:string;
    firstLastName:string;
    secondLastName:string;
    birthday:string;
    userCreation:string;
    userModification?:string;
}