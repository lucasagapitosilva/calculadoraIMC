import { validaPeso, validaAltura } from './alturaPesoValida.js'
import { calculoIMC, statusIMC } from './calculadoraIMC.js'
import opcaoDados from 'readline-sync'

let perguntaPeso = opcaoDados.question("Informe seu peso: ");
let perguntaAltura = opcaoDados.question("Informe sua altura: ")

let verificaPesoValida = validaPeso(perguntaPeso)
let verificaAlturaValida = validaAltura(perguntaAltura)

if (verificaPesoValida && verificaAlturaValida) {

    let resultado = calculoIMC(perguntaPeso, perguntaAltura);
    let statusResultado = statusIMC(resultado);

    console.log("Seu IMC é : " + resultado + " " + statusResultado);

} else {

    console.log("Peso e altura devem ser maiores que zero.")

}
