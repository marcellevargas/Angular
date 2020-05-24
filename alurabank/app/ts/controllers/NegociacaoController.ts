class NegociacaoController {
    // Classe para pegar os inputs

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();

    constructor() {
        /**document.querySelector usado para 
         * pegar o elemento no html de acordo
         * com o id  
         * */
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
    }

    adiciona(event) {
        event.preventDefault();
        /**
         * Para que não de erro e respeirte o tipo declarado no contrutor
         * é preciso converter para o tipo correto
         */ 
        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),
                parseInt(this._inputQuantidade.value),
                parseFloat(this._inputValor.value)
        );
        
        this._negociacoes.adiciona(negociacao);

        console.log(this._negociacoes.paraArray());
        
        this._negociacoes.paraArray().forEach(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);
            console.log(negociacao.volume);
        })
    }
}