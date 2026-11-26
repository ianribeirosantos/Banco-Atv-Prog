import Cliente from "./Cliente"

export default interface CanalNotificacao{
    enviar(cliente:Cliente, mensagem:string):void
}
