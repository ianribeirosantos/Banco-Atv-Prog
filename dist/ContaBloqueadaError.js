"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContaBloqueadaError extends Error {
    constructor(numero) {
        super(`A conta ${numero} está bloqueada. Procure a cooperativa.`);
    }
}
exports.default = ContaBloqueadaError;
//# sourceMappingURL=ContaBloqueadaError.js.map