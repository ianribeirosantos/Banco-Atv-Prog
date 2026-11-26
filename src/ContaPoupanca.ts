import Conta from "./Conta"
import Cliente from "./Cliente"

export default class ContaPoupanca extends Conta{
    constructor(numero:string, agencia:string, dataAbertura:string, saldo:number, titular:Cliente){
        super(numero, agencia, dataAbertura, saldo, 500, titular)
    }

    aplicarRendimento(taxa:number):void{
        this.setSaldo(this.getSaldo() + this.getSaldo() * taxa / 100)
    }

    imprimeinfo():void{
        console.log('Conta poupança: ', this.getNumero(), 'agência: ', this.getAgencia(), 'saldo: ', this.getSaldo(), 'limite diário: ', this.getLimiteDiario())
    }
}
