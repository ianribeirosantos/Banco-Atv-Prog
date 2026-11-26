export default class SaldoInsuficienteError extends Error{
    constructor(valor:number, saldo:number){
        super(`Saldo insuficiente. Você tentou sacar ${valor.toFixed(2)} e tem ${saldo.toFixed(2)}. Faltam ${(valor - saldo).toFixed(2)}.`)
    }
}
