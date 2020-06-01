class Atendimentos {
    constructor() {
        this._atendimentos = [];
    }
    add(atendimento) {
        this._atendimentos.push(atendimento);
    }
    getAtendimentos() {
        return [].concat(this._atendimentos);
    }
}
