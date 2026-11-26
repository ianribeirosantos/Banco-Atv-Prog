import Pessoa from "./Pessoa"
import Conta from "./Conta"
import CanalNotificacao from "./CanalNotificacao"

export default class Cliente extends Pessoa{
    private endereco:string
    private renda:number
    private telefone:string
    private email:string
    private contas:Conta[]
    private canal:CanalNotificacao

    constructor(nome:string, cpf:string, endereco:string, renda:number, telefone:string, email:string, canal:CanalNotificacao){
        super(nome, cpf)
        this.endereco = endereco
        this.renda = renda
        this.telefone = telefone
        this.email = email
        this.canal = canal
        this.contas = []
    }

    getEndereco():string{
        return this.endereco
    }

    setEndereco(endereco:string):void{
        this.endereco = endereco
    }

    getRenda():number{
        return this.renda
    }

    setRenda(renda:number):void{
        if(renda >= 0){
            this.renda = renda
        }else{
            console.log("não aceitamos renda negativa!")
        }
    }

    getTelefone():string{
        return this.telefone
    }

    setTelefone(telefone:string):void{
        this.telefone = telefone
    }

    getEmail():string{
        return this.email
    }

    setEmail(email:string):void{
        this.email = email
    }

    getContas():Conta[]{
        return this.contas
    }

    setContas(contas:Conta[]):void{
        this.contas = contas
    }

    getCanal():CanalNotificacao{
        return this.canal
    }

    setCanal(canal:CanalNotificacao):void{
        this.canal = canal
    }

    adicionarConta(conta:Conta):void{
        this.contas.push(conta)
    }

    notificar(mensagem:string):void{
        this.canal.enviar(this, mensagem)
    }

    imprimeinfo():void{
        console.log('nome: ', this.getNome(), 'cpf: ', this.getCpf(), 'endereço: ', this.endereco, 'renda: ', this.renda)
        console.log('telefone: ', this.telefone, 'email: ', this.email, 'quantidade de contas: ', this.contas.length)
    }
}
