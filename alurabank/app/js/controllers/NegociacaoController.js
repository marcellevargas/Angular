class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        /**document.querySelector usado para
         * pegar o elemento no html de acordo
         * com o id
         * */
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        /**
         * Para que não de erro e respeirte o tipo declarado no contrutor
         * é preciso converter para o tipo correto
         */
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        console.log(this._negociacoes.paraArray());
        this._negociacoes.paraArray().forEach(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);
            console.log(negociacao.volume);
        });
    }
}
