/*
02 - AUMENTO DE SALÁRIO
Crie um programa para atender a necessidade abaixo:
O gestor deverá informar o salário de um funcionário e o software calcular o valor do aumento conforme regra abaixo:

Salários até R$ 1.200,00: aumento de 16%.
Salários de R$ 1.200,01 até R$ 2.100,00: aumento de 13%.
Salários de R$ 2.100,01 até R$ 3.000,00: aumento de 10%.
Salários acima de R$ 3.000,00: aumento de 5%.

Exiba o novo salário após o aumento.
*/
var salario = document.getElementById("salario")
var res = document.getElementById("res")

function calcular() {
   
    if (salario.value < 1200) {
        var aumento = Number(salario.value) * 0.16
        var novosalario = Number(salario.value) + aumento
        res.innerHTML = `<p>Valor do aumento: R$  ${aumento.toFixed(2)}</p>
                        <p>Valor do novo salario: R$  ${novosalario.toFixed(2)}</p>`
    } else if (salario.value <= 2100) {
        var aumento = Number(salario.value) * 0.13
        var novosalario = Number(salario.value) + aumento
        res.innerHTML = `<p>Valor do aumento: R$  ${aumento.toFixed(2)}</p>
                        <p>Valor do novo salario: R$  ${novosalario.toFixed(2)}</p>`
    } else if (salario.value <= 3000) {
        var aumento = Number(salario.value) * 0.10
        var novosalario = Number(salario.value) + aumento
        res.innerHTML = `<p>Valor do aumento: R$  ${aumento.toFixed(2)}</p>
                        <p>Valor do novo salario: R$  ${novosalario.toFixed(2)}</p>`
    } else {
        var aumento = Number(salario.value) * 0.05
        var novosalario = Number(salario.value) + aumento
        res.innerHTML = `<p>Valor do aumento: R$  ${aumento.toFixed(2)}</p>
                        <p>Valor do novo salario: R$  ${novosalario.toFixed(2)}</p>`
    }
}