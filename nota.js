// PEGA OS ELEMENTOS DECLARADOS NO NOTA.HTML ATRAVÉS DO SEU ID E GUARDA EM CONSTANTES
const inputNota1 = document.getElementById("nota1");
const inputNota2 = document.getElementById("nota2");
const btnCalcular = document.getElementById("btnCalcular");
const pResultado = document.getElementById("resultado");

// EVENTO DE CLIQUE EXECUTAR QUANDO O BOTÃO FOR CLICADO
btnCalcular.addEventListener("click", function () {
  // CONVERTE TEXT PARA NUMBER
  let n1 = Number(inputNota1.value);
  let n2 = Number(inputNota2.value);

  let media = (n1 + n2) / 2;

  if (media >= 7) {
    pResultado.innerText = "Estudante APROVADO! Média: " + media;
    pResultado.style.color = "green";
  } else {
    pResultado.innerText = "Estudante NÃO APROVADO! Média: " + media;
    pResultado.style.color = "red";
  }
});