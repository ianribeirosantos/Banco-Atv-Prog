export default class LimiteDiarioExcedidoError extends Error{
    constructor(limite:number, jaSacado:number){
        super(`Limite diário excedido. O limite é ${limite.toFixed(2)} e hoje você já sacou ${jaSacado.toFixed(2)}.`)
    }
}
