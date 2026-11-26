import Pessoa from "./Pessoa";
import Conta from "./Conta";
import CanalNotificacao from "./CanalNotificacao";
export default class Cliente extends Pessoa {
    private endereco;
    private renda;
    private telefone;
    private email;
    private contas;
    private canal;
    constructor(nome: string, cpf: string, endereco: string, renda: number, telefone: string, email: string, canal: CanalNotificacao);
    getEndereco(): string;
    setEndereco(endereco: string): void;
    getRenda(): number;
    setRenda(renda: number): void;
    getTelefone(): string;
    setTelefone(telefone: string): void;
    getEmail(): string;
    setEmail(email: string): void;
    getContas(): Conta[];
    setContas(contas: Conta[]): void;
    getCanal(): CanalNotificacao;
    setCanal(canal: CanalNotificacao): void;
    adicionarConta(conta: Conta): void;
    notificar(mensagem: string): void;
    imprimeinfo(): void;
}
//# sourceMappingURL=Cliente.d.ts.map