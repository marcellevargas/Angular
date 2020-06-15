/**
 * Classe responsável por encapsular o array de Negociacao
 * toda vez que for preciso consultar as negociações existentes
 * eu vou usar a classe Negociacoes
 */

class Negociacoes {
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
       this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return [].concat(this._negociacoes);
    }
}