class AtendimentosView extends View<Atendimentos> {
    template(model: Atendimentos): string {
        return ` <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>PACIENTE</th>
                <th>ESPECIALIDADE</th>
            </tr>
        </thead>

        <tbody>
            ${model.getAtendimentos().map(atendimento => {
            return `
                    <tr>
                        <td>${atendimento.data.getDate()}/${atendimento.data.getMonth() + 1}/${atendimento.data.getFullYear()}</td>
                        <td>${atendimento.paciente}</td>
                        <td>${atendimento.especialidade}</td>
                    </tr>
                `
        }).join('')}
        </tbody>

        <tfoot>
        </tfoot>
    </table> `
    }
}