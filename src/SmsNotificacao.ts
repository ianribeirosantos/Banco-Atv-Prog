import CanalNotificacao from "./CanalNotificacao"
import Cliente from "./Cliente"

export default class SmsNotificacao implements CanalNotificacao{
    enviar(cliente:Cliente, mensagem:string):void{
        console.log("SMS para " + cliente.getTelefone() + ": " + mensagem)
    }
}
