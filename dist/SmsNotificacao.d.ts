import CanalNotificacao from "./CanalNotificacao";
import Cliente from "./Cliente";
export default class SmsNotificacao implements CanalNotificacao {
    enviar(cliente: Cliente, mensagem: string): void;
}
//# sourceMappingURL=SmsNotificacao.d.ts.map