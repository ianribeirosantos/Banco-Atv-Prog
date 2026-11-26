"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_1 = __importDefault(require("./Conta"));
class ContaCorrente extends Conta_1.default {
    constructor(numero, agencia, dataAbertura, saldo, titular) {
        super(numero, agencia, dataAbertura, saldo, 1000, titular);
    }
    imprimeinfo() {
        console.log('Conta corrente: ', this.getNumero(), 'agência: ', this.getAgencia(), 'saldo: ', this.getSaldo(), 'limite diário: ', this.getLimiteDiario());
    }
}
exports.default = ContaCorrente;
//# sourceMappingURL=ContaCorrente.js.map