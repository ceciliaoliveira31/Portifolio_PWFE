function calcularJuros() {
    // VALORES DE ENTRADA
    var principal = parseFloat(document.getElementById("principal").value);
    var taxaDeJuros = parseFloat(document.getElementById("taxaDeJuros").value) / 100; // Converter para decimal
    var periodoAnos = parseFloat(document.getElementById("periodoAnos").value);

    // CÁLCULO DOS JUROS
    var juros = principal * taxaDeJuros * periodoAnos;

    // CÁLCULO DO MONTANTE FINAL
    var montanteTotal = principal + juros;

    // RESULTADO
    document.getElementById("resultado").innerHTML = "Juros a serem pagos: R$ " + juros.toFixed(2) + "<br>Montante total: R$ " + montanteTotal.toFixed(2);}