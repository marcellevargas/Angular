class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    retornaNegociacao() {
        return [].concat(this._negociacoes);
    }
}
