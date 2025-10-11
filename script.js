const toggle = document.getElementById('theme-toggle');
const body = document.body;

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// Seleciona todos os cards de cursos e o modal
const courseCards = document.querySelectorAll(".project-card");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close-modal");

// Define o mapeamento entre os cursos e suas imagens (agora dentro da pasta /imagens/certificados)
const certificateImages = {
  "Introdução ao Git e Github": "./imagens/certificados/GiteGithub.PNG",
  "Ciência de Dados": "./imagens/certificados/CienciadeDados.PNG",
  "Segurança Digital": "./imagens/certificados/SegurançaDigital.PNG",
  "Proteção de Dados": "./imagens/certificados/ProteçãodeDados.PNG",
  "Superexposição na Internet": "./imagens/certificados/SuperExposiçãonaInternet.PNG",
  "Planejamento e Estratégia para Gestão Escolar": "./imagens/certificados/PlanejamentoeEstratégiaparaGestãoEscolar.PNG"
};

// Adiciona evento de clique a cada curso
courseCards.forEach(card => {
  card.addEventListener("click", () => {
    const courseName = card.querySelector("h3").textContent.trim();
    const imgSrc = certificateImages[courseName];

    if (imgSrc) {
      modalImg.src = imgSrc;
      modal.classList.add("show");
    }
  });
});

// Fechar modal ao clicar no “X”
closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Fechar modal ao clicar fora da imagem
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
