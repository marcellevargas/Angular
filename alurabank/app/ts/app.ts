//Instanciando a classe NegociacaoController
const controller = new NegociacaoController();

/**
 * Utilizamos o .querySelector() para pegar o id que
 * corresponde ao formulario.
 * Depois usamos a função .addEventListener()
 * que recebe o evento submit e envia para
 * o evento "adiciona" do  controller 
 * (que foi declarado acima como NegociacaoController)
 */
document
    .querySelector('.form')
    .addEventListener('submit',controller.adiciona.bind(controller));

/**
 * Eu faço um bind para o controller para acessar o evento
 * adiciona da classe NegociacaoController
 */