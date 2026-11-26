import CanalNotificacao from "./CanalNotificacao"
import Cliente from "./Cliente"

export default class WhatsAppNotificacao implements CanalNotificacao{
    enviar(cliente:Cliente, mensagem:string):void{
        console.log("WhatsApp para " + cliente.getTelefone() + ": " + mensagem)
    }
}
