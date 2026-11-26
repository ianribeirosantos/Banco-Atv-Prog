"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LimiteDiarioExcedidoError extends Error {
    constructor(limite, jaSacado) {
        super(`Limite diário excedido. O limite é ${limite.toFixed(2)} e hoje você já sacou ${jaSacado.toFixed(2)}.`);
    }
}
exports.default = LimiteDiarioExcedidoError;
//# sourceMappingURL=LimiteDiarioExcedidoError.js.map