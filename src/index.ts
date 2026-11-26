import Cliente from "./Cliente"
import Conta from "./Conta"
import ContaCorrente from "./ContaCorrente"
import ContaPoupanca from "./ContaPoupanca"
import SmsNotificacao from "./SmsNotificacao"
import EmailNotificacao from "./EmailNotificacao"
import AppNotificacao from "./AppNotificacao"
import WhatsAppNotificacao from "./WhatsAppNotificacao"
import ValorInvalidoError from "./ValorInvalidoError"
import ContaBloqueadaError from "./ContaBloqueadaError"
import SaldoInsuficienteError from "./SaldoInsuficienteError"
import LimiteDiarioExcedidoError from "./LimiteDiarioExcedidoError"

function tentarSacar(conta:Conta, valor:number):void{
    try{
        conta.sacar(valor)
        console.log("Saque de " + valor + " realizado na conta " + conta.getNumero())
        conta.getTitular().notificar("Saque de " + valor + " realizado. Saldo atual: " + conta.getSaldo())
    }catch(erro){
        if(erro instanceof ValorInvalidoError){
            console.log("Erro: valor inválido")
            conta.getTitular().notificar((erro as ValorInvalidoError).message)
        }

        if(erro instanceof ContaBloqueadaError){
            console.log("Erro: conta bloqueada")
            conta.getTitular().notificar((erro as ContaBloqueadaError).message)
        }

        if(erro instanceof SaldoInsuficienteError){
            console.log("Erro: saldo insuficiente")
            conta.getTitular().notificar((erro as SaldoInsuficienteError).message)
        }

        if(erro instanceof LimiteDiarioExcedidoError){
            console.log("Erro: limite diário excedido")
            conta.getTitular().notificar((erro as LimiteDiarioExcedidoError).message)
        }
    }
}

let joao = new Cliente("João silveiro mulambo", "111.111.111-11", "Rua floriano, 10, Recife", 2500, "(81) 91111-1111", "joaoGomes@email.com", new SmsNotificacao())
let ana = new Cliente("Ana maricotona danada", "222.222.222-22", "Rua B, 20, Olinda", 4200, "(81) 92222-2222", "anaMaricotona@email.com", new EmailNotificacao())
let carlos = new Cliente("José Carlos (3A)", "333.333.333-33", "Rua C, 30, Recife", 3100, "(81) 93333-3333", "carlosDo3AMeuBest@email.com", new AppNotificacao())
let bia = new Cliente("Beatriz Melo", "444.444.444-44", "Rua D, 40, Jaboatão", 5800, "(81) 94444-4444", "biaMeladaDanada123@email.com", new WhatsAppNotificacao())

let ccJoao = new ContaCorrente("0001-1", "100", "10/01/2024", 100, joao)
let cpJoao = new ContaPoupanca("0001-2", "100", "10/01/2024", 800, joao)
let ccAna = new ContaCorrente("0002-1", "100", "15/03/2023", 3000, ana)
let cpAna = new ContaPoupanca("0002-2", "100", "15/03/2023", 1200, ana)
let ccCarlos = new ContaCorrente("0003-1", "100", "20/06/2022", 500, carlos)
let ccBia = new ContaCorrente("0004-1", "100", "05/09/2021", 2000, bia)

console.log("clientes e contas")
joao.imprimeinfo()
ana.imprimeinfo()
let contasJoao = joao.getContas()
for(let conta of contasJoao){
    conta.imprimeinfo()
}
let contasAna = ana.getContas()
for(let conta of contasAna){
    conta.imprimeinfo()
}

console.log(" Valor inválido ")
tentarSacar(ccJoao, -50)
tentarSacar(ccAna, 0)

console.log(" Conta bloqueada ")
ccCarlos.setBloqueada(true)
cpAna.setBloqueada(true)
tentarSacar(ccCarlos, 100)
tentarSacar(cpAna, 50)
ccCarlos.setBloqueada(false)
cpAna.setBloqueada(false)

console.log(" Saldo insuficiente ")
tentarSacar(ccJoao, 150)
tentarSacar(ccCarlos, 700)

console.log(" Limite diário excedido ")
tentarSacar(ccAna, 900)
tentarSacar(ccAna, 200)
tentarSacar(ccBia, 1200)

console.log(" Saque com sucesso ")
tentarSacar(ccJoao, 40)
tentarSacar(ccBia, 300)

console.log(" Depósito ")
ccJoao.depositar(60)
console.log("Saldo do João: " + ccJoao.getSaldo())
ccCarlos.depositar(250)
console.log("Saldo do Carlos: " + ccCarlos.getSaldo())

try{
    ccJoao.depositar(-10)
}catch(erro){
    if(erro instanceof ValorInvalidoError){
        console.log((erro as ValorInvalidoError).message)
    }
}

console.log(" Troca de canal ")
joao.setCanal(new WhatsAppNotificacao())
tentarSacar(ccJoao, 5000)
carlos.setCanal(new EmailNotificacao())
tentarSacar(ccCarlos, 9999)

console.log(" Poupança ")
cpJoao.aplicarRendimento(1.5)
console.log("Saldo da poupança do João: " + cpJoao.getSaldo())
cpAna.aplicarRendimento(2)
console.log("Saldo da poupança da Ana: " + cpAna.getSaldo())
