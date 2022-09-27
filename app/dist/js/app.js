import { NegociacaoController } from './controllers/negociacao-controller.js';
import { htmlTratamento } from './models/html-tratamento.js';
const controller = new NegociacaoController();
const form = htmlTratamento.verificaNullHtmlElement(document.querySelector('.form'));
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
const importar = document.querySelector('#import');
if (importar) {
    importar.addEventListener('click', () => {
        controller.importData();
    });
}
else {
    throw Error('Botão importa não foi encontrado');
}
//# sourceMappingURL=app.js.map