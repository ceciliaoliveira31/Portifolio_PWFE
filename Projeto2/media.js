function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);

    const media = (nota1 + nota2) / 2;

    if (!isNaN(media)) {
      document.getElementById("resultado").textContent = "A média é: " + media;
    } else {
      document.getElementById("resultado").textContent = "Por favor, insira notas válidas.";
    }
  }