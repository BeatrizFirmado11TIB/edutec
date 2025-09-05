document.addEventListener("DOMContentLoaded", function () {
  const btnConteudo = document.getElementById("btn-conteudo");
  const dropdownMenu = document.getElementById("dropdown-menu");

  btnConteudo.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

 
  document.addEventListener("click", function (e) {
    if (
      !dropdownMenu.contains(e.target) &&
      !btnConteudo.contains(e.target)
    ) {
      dropdownMenu.style.display = "none";
    }
  });
});


function toggleTopics() {
  const topics = document.getElementById("ecoTopics");
  const btn = document.querySelector(".toggle-btn");
  
  if (topics.style.display === "block") {
    topics.style.display = "none";
    btn.textContent = "+ Saiba mais";
  } else {
    topics.style.display = "block";
    btn.textContent = "– Ocultar";
  }
}


const botoes = document.querySelectorAll(".opcoes button");
const resultado = document.getElementById("resultado");

const correta = "Amazônica";

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    if (botao.dataset.resposta === correta) {
      resultado.textContent = "✅ Você acertou!";
      resultado.style.color = "lightgreen";
    } else {
      resultado.textContent = "❌ Você errou! Tente novamente.";
      resultado.style.color = "red";
    }
  });
});
