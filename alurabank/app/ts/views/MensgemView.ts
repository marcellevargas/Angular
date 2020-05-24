class MensagemView  extends View{
   
    public template(model: String): string {
        return `<p class="alert-info">${model}</p>`
    }
}