import CanalNotificacao from "./CanalNotificacao"
import Cliente from "./Cliente"

export default class EmailNotificacao implements CanalNotificacao{
    enviar(cliente:Cliente, mensagem:string):void{
        console.log("E-mail para " + cliente.getEmail())
        console.log("Assunto: Aviso da cooperativa")
        console.log("Olá, " + cliente.getNome() + ". " + mensagem)
    }
}
