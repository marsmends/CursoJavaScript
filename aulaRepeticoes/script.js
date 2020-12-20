function contar() {
    let ini = document.getElementById('texti')
    let fim = document.getElementById('textf')
    let passo = document.getElementById('textp')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Dados errados')
    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f) {
            window.alert('Passo inválido. Considerenado passo 1')
            p = 1
        }

        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}