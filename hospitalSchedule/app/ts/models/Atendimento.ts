class Atendimento {
    constructor(
        private _data: Date,
        private _paciente: string,
        private _especialidade: string
    ){}

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