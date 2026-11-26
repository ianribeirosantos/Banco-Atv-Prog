export default abstract class Pessoa {
    private nome;
    private cpf;
    constructor(nome: string, cpf: string);
    getNome(): string;
    setNome(nome: string): void;
    getCpf(): string;
    setCpf(cpf: string): void;
    abstract imprimeinfo(): void;
}
//# sourceMappingURL=Pessoa.d.ts.map