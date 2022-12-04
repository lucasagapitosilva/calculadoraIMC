const validaPeso = (peso) => {

    let pesoValida = false

    if (peso > 0) {

        pesoValida = true

    }

    return pesoValida

}

const validaAltura = (altura) => {

    let alturaValida = false

    if (altura > 0) {

        alturaValida = true

    }

    return alturaValida;

}

export { validaPeso, validaAltura };