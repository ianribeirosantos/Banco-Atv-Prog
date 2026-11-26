export default class ValorInvalidoError extends Error{
    constructor(valor:number){
        super(`Você digitou ${valor}. O valor precisa ser maior que zero.`)
    }
}
