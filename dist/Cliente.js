"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Cliente extends Pessoa_1.default {
    endereco;
    renda;
    telefone;
    email;
    contas;
    canal;
    constructor(nome, cpf, endereco, renda, telefone, email, canal) {
        super(nome, cpf);
        this.endereco = endereco;
        this.renda = renda;
        this.telefone = telefone;
        this.email = email;
        this.canal = canal;
        this.contas = [];
    }
    getEndereco() {
        return this.endereco;
    }
    setEndereco(endereco) {
        this.endereco = endereco;
    }
    getRenda() {
        return this.renda;
    }
    setRenda(renda) {
        if (renda >= 0) {
            this.renda = renda;
        }
        else {
            console.log("não aceitamos renda negativa!");
        }
    }
    getTelefone() {
        return this.telefone;
    }
    setTelefone(telefone) {
        this.telefone = telefone;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getContas() {
        return this.contas;
    }
    setContas(contas) {
        this.contas = contas;
    }
    getCanal() {
        return this.canal;
    }
    setCanal(canal) {
        this.canal = canal;
    }
    adicionarConta(conta) {
        this.contas.push(conta);
    }
    notificar(mensagem) {
        this.canal.enviar(this, mensagem);
    }
    imprimeinfo() {
        console.log('nome: ', this.getNome(), 'cpf: ', this.getCpf(), 'endereço: ', this.endereco, 'renda: ', this.renda);
        console.log('telefone: ', this.telefone, 'email: ', this.email, 'quantidade de contas: ', this.contas.length);
    }
}
exports.default = Cliente;
//# sourceMappingURL=Cliente.js.map