class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        /**Criei uma instancia da view e
         * vou passar o seletor CSS da minha View por parâmetro
         * esse id serve para informar aonde o nosso template
         * precisa aparecer quando for renderizado
         */
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._mensagemView = new MensagemView('#mensagemView');
        /**document.querySelector usado para
         * pegar o elemento no html de acordo
         * com o id
         * */
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
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
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociaçãos adicionadas com sucesso');
    }
}
