"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailNotificacao {
    enviar(cliente, mensagem) {
        console.log("E-mail para " + cliente.getEmail());
        console.log("Assunto: Aviso da cooperativa");
        console.log("Olá, " + cliente.getNome() + ". " + mensagem);
    }
}
exports.default = EmailNotificacao;
//# sourceMappingURL=EmailNotificacao.js.map