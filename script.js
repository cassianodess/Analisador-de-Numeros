let num = window.document.getElementById("num")

let resp = window.document.getElementById("resp")

let lista = window.document.getElementById("lista")

let valores = []

function inLista(n, list) {

    if (list.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }


}

function media(lista) {
    let soma = 0
    for (var i = 0; i < lista.length; i++) {
        soma += lista[i]
    }
    return (soma / lista.length)
}

function adicionar() {

    if ((num.value >= 1 && num.value <= 100) && !inLista(num.value, valores)) {

        valores.push(Number(num.value))

        let item = document.createElement("option")

        item.text = `Valor ${num.value} adicionado`

        lista.appendChild(item)
        resp.innerHTML = ""


    } else {
        alert(`Dados inválidos ou já existe na lista!`)
    }

    num.value = ""
    num.focus()

}

function finalizar() {
    if (valores.length == 0) {
        alert(`Adicione valores antes de finalizar!`)
    } else {
        let total = valores.length
        let menor = valores[0]
        let maior = valores[(valores.length) - 1]
        let média = media(valores)

        resp.innerHTML = ""
        resp.innerHTML += `<p>Total de números cadastrados: ${total}</p>`
        resp.innerHTML += `<p>O maior valor é ${maior}</p>`
        resp.innerHTML += `<p>O menor valor é ${menor}</p>`

        resp.innerHTML += `<p>Média: ${média}</p>`

    }

}