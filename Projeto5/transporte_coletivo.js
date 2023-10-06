/*
03 - TRANSPORTE DE COLABORADORES

Desenvolva um programa onde o gerente deverá informar a quantidade de funcionários que necessitarão de transporte fretado e a quantidade de dias úteis em que o transporte
deverá acontecer.
Mostre o custo mensal de acordo com a tabela abaixo:

1 a 49 pessoas - R$ 4,50 pessoa / dia
50 a 99 pessoas - R$ 4,10 pessoa / dia
100 a 149 pessoas - R$ 3,80 pessoa / dia
150 a + pessoas - R$ 3,60 pessoa / dia
*/
var funcionarios = document.getElementById("funcionarios")
var dias = document.getElementById("dias")
var res = document.getElementById("res")
var res = document.getElementById("res")
function calcular(){
    if (dias.value<=0 || funcionarios.value<=0){
        alert(`O número de pessoas e de dias deve ser maior que 0`)
    }else if (funcionarios.value <= 49 && funcionarios.value >= 1) {
        var transporte = Number(funcionarios.value) * Number(dias.value) * 4.5
        res.innerHTML = `<p>O valor do transporte para ${funcionarios.value} pessoa(s) por ${dias.value} dia(s) será de: R$  ${transporte.toFixed(2)}</p>`
    } else if (funcionarios.value <= 99 && funcionarios.value >= 50) {
        var transporte = Number(funcionarios.value) * Number(dias.value) * 4.1
        res.innerHTML = `<p>O valor do transporte para ${funcionarios.value} pessoa(s) por ${dias.value} dia(s) será de: R$  ${transporte.toFixed(2)}</p>`
    } else if (funcionarios.value <= 149 && funcionarios.value >= 100) {
        var transporte = Number(funcionarios.value) * Number(dias.value) * 3.8
        res.innerHTML = `<p>O valor do transporte para ${funcionarios.value} pessoa(s) por ${dias.value} dia(s) será de: R$  ${transporte.toFixed(2)}</p>`
    } else {
        var transporte = Number(funcionarios.value) * Number(dias.value) * 3.6
        res.innerHTML = `<p>O valor do transporte para ${funcionarios.value} pessoa(s) por ${dias.value} dia(s) será de: R$  ${transporte.toFixed(2)}</p>`
    }
}