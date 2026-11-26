"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WhatsAppNotificacao {
    enviar(cliente, mensagem) {
        console.log("WhatsApp para " + cliente.getTelefone() + ": " + mensagem);
    }
}
exports.default = WhatsAppNotificacao;
//# sourceMappingURL=WhatsAppNotificacao.js.map