"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = __importDefault(require("./Cliente"));
const ContaCorrente_1 = __importDefault(require("./ContaCorrente"));
const ContaPoupanca_1 = __importDefault(require("./ContaPoupanca"));
const SmsNotificacao_1 = __importDefault(require("./SmsNotificacao"));
const EmailNotificacao_1 = __importDefault(require("./EmailNotificacao"));
const AppNotificacao_1 = __importDefault(require("./AppNotificacao"));
const WhatsAppNotificacao_1 = __importDefault(require("./WhatsAppNotificacao"));
const ValorInvalidoError_1 = __importDefault(require("./ValorInvalidoError"));
const ContaBloqueadaError_1 = __importDefault(require("./ContaBloqueadaError"));
const SaldoInsuficienteError_1 = __importDefault(require("./SaldoInsuficienteError"));
const LimiteDiarioExcedidoError_1 = __importDefault(require("./LimiteDiarioExcedidoError"));
function tentarSacar(conta, valor) {
    try {
        conta.sacar(valor);
        console.log("Saque de " + valor + " realizado na conta " + conta.getNumero());
        conta.getTitular().notificar("Saque de " + valor + " realizado. Saldo atual: " + conta.getSaldo());
    }
    catch (erro) {
        if (erro instanceof ValorInvalidoError_1.default) {
            console.log("Erro: valor inválido");
            conta.getTitular().notificar(erro.message);
        }
        if (erro instanceof ContaBloqueadaError_1.default) {
            console.log("Erro: conta bloqueada");
            conta.getTitular().notificar(erro.message);
        }
        if (erro instanceof SaldoInsuficienteError_1.default) {
            console.log("Erro: saldo insuficiente");
            conta.getTitular().notificar(erro.message);
        }
        if (erro instanceof LimiteDiarioExcedidoError_1.default) {
            console.log("Erro: limite diário excedido");
            conta.getTitular().notificar(erro.message);
        }
    }
}
let joao = new Cliente_1.default("João silveiro mulambo", "111.111.111-11", "Rua floriano, 10, Recife", 2500, "(81) 91111-1111", "joaoGomes@email.com", new SmsNotificacao_1.default());
let ana = new Cliente_1.default("Ana maricotona danada", "222.222.222-22", "Rua B, 20, Olinda", 4200, "(81) 92222-2222", "anaMaricotona@email.com", new EmailNotificacao_1.default());
let carlos = new Cliente_1.default("José Carlos (3A)", "333.333.333-33", "Rua C, 30, Recife", 3100, "(81) 93333-3333", "carlosDo3AMeuBest@email.com", new AppNotificacao_1.default());
let bia = new Cliente_1.default("Beatriz Melo", "444.444.444-44", "Rua D, 40, Jaboatão", 5800, "(81) 94444-4444", "biaMeladaDanada123@email.com", new WhatsAppNotificacao_1.default());
let ccJoao = new ContaCorrente_1.default("0001-1", "100", "10/01/2024", 100, joao);
let cpJoao = new ContaPoupanca_1.default("0001-2", "100", "10/01/2024", 800, joao);
let ccAna = new ContaCorrente_1.default("0002-1", "100", "15/03/2023", 3000, ana);
let cpAna = new ContaPoupanca_1.default("0002-2", "100", "15/03/2023", 1200, ana);
let ccCarlos = new ContaCorrente_1.default("0003-1", "100", "20/06/2022", 500, carlos);
let ccBia = new ContaCorrente_1.default("0004-1", "100", "05/09/2021", 2000, bia);
console.log("clientes e contas");
joao.imprimeinfo();
ana.imprimeinfo();
let contasJoao = joao.getContas();
for (let conta of contasJoao) {
    conta.imprimeinfo();
}
let contasAna = ana.getContas();
for (let conta of contasAna) {
    conta.imprimeinfo();
}
console.log(" Valor inválido ");
tentarSacar(ccJoao, -50);
tentarSacar(ccAna, 0);
console.log(" Conta bloqueada ");
ccCarlos.setBloqueada(true);
cpAna.setBloqueada(true);
tentarSacar(ccCarlos, 100);
tentarSacar(cpAna, 50);
ccCarlos.setBloqueada(false);
cpAna.setBloqueada(false);
console.log(" Saldo insuficiente ");
tentarSacar(ccJoao, 150);
tentarSacar(ccCarlos, 700);
console.log(" Limite diário excedido ");
tentarSacar(ccAna, 900);
tentarSacar(ccAna, 200);
tentarSacar(ccBia, 1200);
console.log(" Saque com sucesso ");
tentarSacar(ccJoao, 40);
tentarSacar(ccBia, 300);
console.log(" Depósito ");
ccJoao.depositar(60);
console.log("Saldo do João: " + ccJoao.getSaldo());
ccCarlos.depositar(250);
console.log("Saldo do Carlos: " + ccCarlos.getSaldo());
try {
    ccJoao.depositar(-10);
}
catch (erro) {
    if (erro instanceof ValorInvalidoError_1.default) {
        console.log(erro.message);
    }
}
console.log(" Troca de canal ");
joao.setCanal(new WhatsAppNotificacao_1.default());
tentarSacar(ccJoao, 5000);
carlos.setCanal(new EmailNotificacao_1.default());
tentarSacar(ccCarlos, 9999);
console.log(" Poupança ");
cpJoao.aplicarRendimento(1.5);
console.log("Saldo da poupança do João: " + cpJoao.getSaldo());
cpAna.aplicarRendimento(2);
console.log("Saldo da poupança da Ana: " + cpAna.getSaldo());
//# sourceMappingURL=index.js.map