class MensagemView  extends View <string>{
    public template(model: String): string {
        return `<p class="alert-info">${model}</p>`
    }
}