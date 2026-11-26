"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValorInvalidoError extends Error {
    constructor(valor) {
        super(`Você digitou ${valor}. O valor precisa ser maior que zero.`);
    }
}
exports.default = ValorInvalidoError;
//# sourceMappingURL=ValorInvalidoError.js.map