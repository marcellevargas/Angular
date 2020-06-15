class Atendimentos {
    private _atendimentos: Atendimento[] = [];

    add(atendimento: Atendimento) {
        this._atendimentos.push(atendimento);
    }

    getAtendimentos(): Atendimento[] { 
        return [].concat(this._atendimentos)
    }
}