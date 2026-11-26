import Conta from "./Conta"
import Cliente from "./Cliente"

export default class ContaCorrente extends Conta{
    constructor(numero:string, agencia:string, dataAbertura:string, saldo:number, titular:Cliente){
        super(numero, agencia, dataAbertura, saldo, 1000, titular)
    }

    imprimeinfo():void{
        console.log('Conta corrente: ', this.getNumero(), 'agência: ', this.getAgencia(), 'saldo: ', this.getSaldo(), 'limite diário: ', this.getLimiteDiario())
    }
}
