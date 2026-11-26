import Cliente from "./Cliente";
export default abstract class Conta {
    private numero;
    private agencia;
    private dataAbertura;
    private saldo;
    private bloqueada;
    private limiteDiario;
    private totalSacadoHoje;
    private titular;
    constructor(numero: string, agencia: string, dataAbertura: string, saldo: number, limiteDiario: number, titular: Cliente);
    getNumero(): string;
    setNumero(numero: string): void;
    getAgencia(): string;
    setAgencia(agencia: string): void;
    getDataAbertura(): string;
    setDataAbertura(dataAbertura: string): void;
    getSaldo(): number;
    setSaldo(saldo: number): void;
    getBloqueada(): boolean;
    setBloqueada(bloqueada: boolean): void;
    getLimiteDiario(): number;
    setLimiteDiario(limiteDiario: number): void;
    getTotalSacadoHoje(): number;
    setTotalSacadoHoje(totalSacadoHoje: number): void;
    getTitular(): Cliente;
    setTitular(titular: Cliente): void;
    sacar(valor: number): void;
    depositar(valor: number): void;
    abstract imprimeinfo(): void;
}
//# sourceMappingURL=Conta.d.ts.map