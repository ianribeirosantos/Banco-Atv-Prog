export default class ContaBloqueadaError extends Error{
    constructor(numero:string){
        super(`A conta ${numero} está bloqueada. Procure a cooperativa.`)
    }
}
