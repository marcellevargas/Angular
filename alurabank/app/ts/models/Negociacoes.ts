class Negociacoes {
    
    private _negociacoes: Array<Negociacao> = [];

    adiciona (negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }

    retornaNegociacao () {
        return this._negociacoes;
    }
}