export default abstract class Pessoa{
    private nome:string
    private cpf:string

    constructor(nome:string, cpf:string){
        this.nome = nome
        this.cpf = cpf
    }

    getNome():string{
        return this.nome
    }

    setNome(nome:string):void{
        if(nome != ""){
            this.nome = nome
        }else{
            console.log("não aceitamos nome vazio!")
        }
    }

    getCpf():string{
        return this.cpf
    }

    setCpf(cpf:string):void{
        if(cpf != ""){
            this.cpf = cpf
        }else{
            console.log("não aceitamos cpf vazio!")
        }
    }

    abstract imprimeinfo():void
}
