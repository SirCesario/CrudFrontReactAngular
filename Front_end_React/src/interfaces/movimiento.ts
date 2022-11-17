export interface Movimiento {

transactionId?:number;
accountId?:number;
type: "..." | "Consignacion" |"Retiro" | "Otros" ;
value:number;
period: "..."|"Quincenal" | "Mensual" | "Semestral" ;
status:"..."|"Activo" | "Inactivo";
transactionDate:string;
transactionCreation:string;
userCreation:string;
modificationDate:string;
userModification:string;
}