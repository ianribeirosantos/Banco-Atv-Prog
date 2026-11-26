"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SaldoInsuficienteError extends Error {
    constructor(valor, saldo) {
        super(`Saldo insuficiente. Você tentou sacar ${valor.toFixed(2)} e tem ${saldo.toFixed(2)}. Faltam ${(valor - saldo).toFixed(2)}.`);
    }
}
exports.default = SaldoInsuficienteError;
//# sourceMappingURL=SaldoInsuficienteError.js.map