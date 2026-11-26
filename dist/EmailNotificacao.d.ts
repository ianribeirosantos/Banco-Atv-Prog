import CanalNotificacao from "./CanalNotificacao";
import Cliente from "./Cliente";
export default class EmailNotificacao implements CanalNotificacao {
    enviar(cliente: Cliente, mensagem: string): void;
}
//# sourceMappingURL=EmailNotificacao.d.ts.map