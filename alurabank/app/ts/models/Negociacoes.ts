class Negociacoes {
    
    private _negociacoes: Negociacao[] = [];

    adiciona (negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }

    retornaNegociacao (): Negociacao[] {
        return [].concat(this._negociacoes);
    }
}