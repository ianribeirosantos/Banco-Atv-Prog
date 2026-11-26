"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmsNotificacao {
    enviar(cliente, mensagem) {
        console.log("SMS para " + cliente.getTelefone() + ": " + mensagem);
    }
}
exports.default = SmsNotificacao;
//# sourceMappingURL=SmsNotificacao.js.map