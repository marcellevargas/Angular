class NegociacaoController {
    // Classe para pegar os inputs

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();

    /**Criei uma instancia da view e 
     * vou passar o seletor CSS da minha View por parâmetro
     * esse id serve para informar aonde o nosso template 
     * precisa aparecer quando for renderizado
     */ 
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView')
    constructor() {
        /**document.querySelector usado para 
         * pegar o elemento no html de acordo
         * com o id  
         * */
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event) {
        event.preventDefault();
        /**
         * Para que não de erro e respeirte o tipo declarado no contrutor
         * é preciso converter para o tipo correto
         */ 
        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')),
                parseInt(this._inputQuantidade.val()),
                parseFloat(this._inputValor.val())
        );
        
        this._negociacoes.adiciona(negociacao);

        console.log(this._negociacoes.paraArray());
        
        this._negociacoes.paraArray().forEach(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);
            console.log(negociacao.volume);
        })

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociaçãos adicionadas com sucesso');
    }
}