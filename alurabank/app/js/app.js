/**
 * Criar uma instância de NegociacaoController
 * e associar ao evento submit
 */
const controller = new NegociacaoController();
document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));
