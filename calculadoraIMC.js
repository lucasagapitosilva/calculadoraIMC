import formatoIMC from './formatacaoDados.js'

const calculoIMC = (peso, altura) => {

    let imc = peso / (altura * altura)
    let imcFormatado = formatoIMC(imc)

    return imcFormatado

}

const statusIMC = (imc) => {

    let status;

    if (imc < 18.5) {

        status = "Você está abaixo do peso."

    } else if (imc > 18.5 && imc < 24.9) {

        status = "Você está com o peso normal."

    } else if (imc > 24.9 && imc < 30) {

        status = " Você está acima do seu peso."

    } else {

        status = "Você está obeso !"

    }

    return status;

}

export { calculoIMC, statusIMC };