"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_1 = __importDefault(require("./Conta"));
class ContaPoupanca extends Conta_1.default {
    constructor(numero, agencia, dataAbertura, saldo, titular) {
        super(numero, agencia, dataAbertura, saldo, 500, titular);
    }
    aplicarRendimento(taxa) {
        this.setSaldo(this.getSaldo() + this.getSaldo() * taxa / 100);
    }
    imprimeinfo() {
        console.log('Conta poupança: ', this.getNumero(), 'agência: ', this.getAgencia(), 'saldo: ', this.getSaldo(), 'limite diário: ', this.getLimiteDiario());
    }
}
exports.default = ContaPoupanca;
//# sourceMappingURL=ContaPoupanca.js.map