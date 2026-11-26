import Cliente from "./Cliente"
import ValorInvalidoError from "./ValorInvalidoError"
import ContaBloqueadaError from "./ContaBloqueadaError"
import SaldoInsuficienteError from "./SaldoInsuficienteError"
import LimiteDiarioExcedidoError from "./LimiteDiarioExcedidoError"

export default abstract class Conta{
    private numero:string
    private agencia:string
    private dataAbertura:string
    private saldo:number
    private bloqueada:boolean
    private limiteDiario:number
    private totalSacadoHoje:number
    private titular:Cliente

    constructor(numero:string, agencia:string, dataAbertura:string, saldo:number, limiteDiario:number, titular:Cliente){
        this.numero = numero
        this.agencia = agencia
        this.dataAbertura = dataAbertura
        this.saldo = saldo
        this.limiteDiario = limiteDiario
        this.titular = titular
        this.bloqueada = false
        this.totalSacadoHoje = 0
        titular.adicionarConta(this)
    }

    getNumero():string{
        return this.numero
    }

    setNumero(numero:string):void{
        this.numero = numero
    }

    getAgencia():string{
        return this.agencia
    }

    setAgencia(agencia:string):void{
        this.agencia = agencia
    }

    getDataAbertura():string{
        return this.dataAbertura
    }

    setDataAbertura(dataAbertura:string):void{
        this.dataAbertura = dataAbertura
    }

    getSaldo():number{
        return this.saldo
    }

    setSaldo(saldo:number):void{
        if(saldo >= 0){
            this.saldo = saldo
        }else{
            console.log("não aceitamos saldo negativo!")
        }
    }

    getBloqueada():boolean{
        return this.bloqueada
    }

    setBloqueada(bloqueada:boolean):void{
        this.bloqueada = bloqueada
    }

    getLimiteDiario():number{
        return this.limiteDiario
    }

    setLimiteDiario(limiteDiario:number):void{
        this.limiteDiario = limiteDiario
    }

    getTotalSacadoHoje():number{
        return this.totalSacadoHoje
    }

    setTotalSacadoHoje(totalSacadoHoje:number):void{
        this.totalSacadoHoje = totalSacadoHoje
    }

    getTitular():Cliente{
        return this.titular
    }

    setTitular(titular:Cliente):void{
        this.titular = titular
    }

    sacar(valor:number):void{
        if(isNaN(valor) || valor <= 0){
            throw new ValorInvalidoError(valor)
        }

        if(this.bloqueada){
            throw new ContaBloqueadaError(this.numero)
        }

        if(valor > this.saldo){
            throw new SaldoInsuficienteError(valor, this.saldo)
        }

        if(this.totalSacadoHoje + valor > this.limiteDiario){
            throw new LimiteDiarioExcedidoError(this.limiteDiario, this.totalSacadoHoje)
        }

        this.saldo = this.saldo - valor
        this.totalSacadoHoje = this.totalSacadoHoje + valor
    }

    depositar(valor:number):void{
        if(isNaN(valor) || valor <= 0){
            throw new ValorInvalidoError(valor)
        }

        this.saldo = this.saldo + valor
    }

    abstract imprimeinfo():void
}
