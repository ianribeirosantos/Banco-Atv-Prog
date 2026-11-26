import Conta from "./Conta";
import Cliente from "./Cliente";
export default class ContaPoupanca extends Conta {
    constructor(numero: string, agencia: string, dataAbertura: string, saldo: number, titular: Cliente);
    aplicarRendimento(taxa: number): void;
    imprimeinfo(): void;
}
//# sourceMappingURL=ContaPoupanca.d.ts.map