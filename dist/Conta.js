"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValorInvalidoError_1 = __importDefault(require("./ValorInvalidoError"));
const ContaBloqueadaError_1 = __importDefault(require("./ContaBloqueadaError"));
const SaldoInsuficienteError_1 = __importDefault(require("./SaldoInsuficienteError"));
const LimiteDiarioExcedidoError_1 = __importDefault(require("./LimiteDiarioExcedidoError"));
class Conta {
    numero;
    agencia;
    dataAbertura;
    saldo;
    bloqueada;
    limiteDiario;
    totalSacadoHoje;
    titular;
    constructor(numero, agencia, dataAbertura, saldo, limiteDiario, titular) {
        this.numero = numero;
        this.agencia = agencia;
        this.dataAbertura = dataAbertura;
        this.saldo = saldo;
        this.limiteDiario = limiteDiario;
        this.titular = titular;
        this.bloqueada = false;
        this.totalSacadoHoje = 0;
        titular.adicionarConta(this);
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getAgencia() {
        return this.agencia;
    }
    setAgencia(agencia) {
        this.agencia = agencia;
    }
    getDataAbertura() {
        return this.dataAbertura;
    }
    setDataAbertura(dataAbertura) {
        this.dataAbertura = dataAbertura;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(saldo) {
        if (saldo >= 0) {
            this.saldo = saldo;
        }
        else {
            console.log("não aceitamos saldo negativo!");
        }
    }
    getBloqueada() {
        return this.bloqueada;
    }
    setBloqueada(bloqueada) {
        this.bloqueada = bloqueada;
    }
    getLimiteDiario() {
        return this.limiteDiario;
    }
    setLimiteDiario(limiteDiario) {
        this.limiteDiario = limiteDiario;
    }
    getTotalSacadoHoje() {
        return this.totalSacadoHoje;
    }
    setTotalSacadoHoje(totalSacadoHoje) {
        this.totalSacadoHoje = totalSacadoHoje;
    }
    getTitular() {
        return this.titular;
    }
    setTitular(titular) {
        this.titular = titular;
    }
    sacar(valor) {
        if (isNaN(valor) || valor <= 0) {
            throw new ValorInvalidoError_1.default(valor);
        }
        if (this.bloqueada) {
            throw new ContaBloqueadaError_1.default(this.numero);
        }
        if (valor > this.saldo) {
            throw new SaldoInsuficienteError_1.default(valor, this.saldo);
        }
        if (this.totalSacadoHoje + valor > this.limiteDiario) {
            throw new LimiteDiarioExcedidoError_1.default(this.limiteDiario, this.totalSacadoHoje);
        }
        this.saldo = this.saldo - valor;
        this.totalSacadoHoje = this.totalSacadoHoje + valor;
    }
    depositar(valor) {
        if (isNaN(valor) || valor <= 0) {
            throw new ValorInvalidoError_1.default(valor);
        }
        this.saldo = this.saldo + valor;
    }
}
exports.default = Conta;
//# sourceMappingURL=Conta.js.map