document.getElementById("convertButton").addEventListener("click", function () {
  const numberInput = document.getElementById("numberInput").value;
  const resultDiv = document.getElementById("result");

  if (numberInput === "") {
    resultDiv.innerText = "Por favor, insira um número.";
    return;
  }

  const url = `http://localhost:3000/${numberInput}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      resultDiv.innerText = `Por extenso: ${data.extenso}`;
    })
    .catch((error) => {
      resultDiv.innerText =
        "Erro ao converter o número. Verifique se o número está no intervalo permitido.";
      console.error("Erro:", error);
    });
});
