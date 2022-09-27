import { htmlTratamento } from "../models/html-tratamento.js";
export class View {
    constructor(selector) {
        this.element = htmlTratamento.verificaNullHtmlElement(document.querySelector(selector));
    }
    update(model, tipo) {
        this.type = (tipo == undefined ? '' : tipo);
        let template = this.template(model);
        this.element.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map