class Atendimento {
    constructor(_data, _paciente, _especialidade) {
        this._data = _data;
        this._paciente = _paciente;
        this._especialidade = _especialidade;
    }
    get data() {
        return this._data;
    }
    get paciente() {
        return this._paciente;
    }
    get especialidade() {
        return this._especialidade;
    }
}
