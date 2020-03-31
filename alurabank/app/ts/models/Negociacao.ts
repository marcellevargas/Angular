class Negociacao {

    /**
     * toda class em ES15 precisa ter um constructor
     */
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        /**
         * na convenção do JavaScript 
         * o _ antes do nome da propriedade
         * indicam que essas propriedades não 
         * podem ser alteradas
         */
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    /**
     * Como eu declarei essas propriedades
     * com _ fica descrito que para acessar
     * essas propriedades é necessário que a
     * pessoa acesse o classe para acessar
     * as propriedades
     */
    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}