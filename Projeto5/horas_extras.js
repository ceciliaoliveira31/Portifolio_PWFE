function calcularHorasExtras() {
    const salarioMensal = parseFloat(document.getElementById("salarioMensal").value);
    const horasExtrasNormais = parseFloat(document.getElementById("horasExtrasNormais").value);
    const horasExtrasFinaisSemana = parseFloat(document.getElementById("horasExtrasFinaisSemana").value);
   
    const valorHoraTrabalhada = salarioMensal / 200;
    const valorHorasExtrasNormais = horasExtrasNormais * valorHoraTrabalhada;
    const valorHorasExtrasFinaisSemana = horasExtrasFinaisSemana * valorHoraTrabalhada * 1.5;
   
    const valorTotalHorasExtras = valorHorasExtrasNormais + valorHorasExtrasFinaisSemana;
   
    document.getElementById("res").textContent = `Valor a receber pelas horas extras: R$${valorTotalHorasExtras.toFixed(2)}`;
}
