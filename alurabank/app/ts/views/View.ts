class View<T> {
    protected _elemento: Element;
    
    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    update(model: T) {
        this._elemento.innerHTML = this.template(model)
    }

    public template(model: T): string {
        return ;
    }
}