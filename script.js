function contar() {
    
    let ini = window.document.getElementById('txt_i')
    let fim = window.document.getElementById('txt_f')
    let passo = window.document.getElementById('txt_p')
    let res = window.document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = '<strong>Impossível contar! Verifique os dados \u{1F446}</strong>'
    } else {
        res.innerHTML = '<strong>Contando:</strong><br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}
