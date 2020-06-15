class AtendimentoController {
    constructor() {
        this._atentimentos = new Atendimentos();
        this._atendimentosView = new AtendimentosView('#atendimentosView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = $('#data');
        this._inputPaciente = $('#paciente');
        this._inputEspecialidade = $('#especialidade');
        this._atendimentosView.update(this._atentimentos);
    }
    adiciona(event) {
        event.preventDefault();
        const atendimento = new Atendimento(new Date(this._inputData.val().replace(/-/g, ',')), this._inputPaciente.val(), this._inputEspecialidade.val());
        this._atentimentos.add(atendimento);
        console.log(this._atentimentos.getAtendimentos());
        this._atentimentos.getAtendimentos().forEach(a => {
            console.log(a.data);
            console.log(a.paciente);
            console.log(a.especialidade);
        });
        this._atendimentosView.update(this._atentimentos);
        this._mensagemView.update('Atendimento agendado com sucesso');
    }
}
