import CanalNotificacao from "./CanalNotificacao"
import Cliente from "./Cliente"

export default class AppNotificacao implements CanalNotificacao{
    enviar(cliente:Cliente, mensagem:string):void{
        console.log("Notificação no app de " + cliente.getNome() + ": " + mensagem)
    }
}
