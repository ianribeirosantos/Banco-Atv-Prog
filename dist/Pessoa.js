"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    cpf;
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        if (nome != "") {
            this.nome = nome;
        }
        else {
            console.log("não aceitamos nome vazio!");
        }
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        if (cpf != "") {
            this.cpf = cpf;
        }
        else {
            console.log("não aceitamos cpf vazio!");
        }
    }
}
exports.default = Pessoa;
//# sourceMappingURL=Pessoa.js.map