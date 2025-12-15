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


const canvas = document.getElementById("particles-bg");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const particles = [];
const COUNT = 70;

for (let i = 0; i < COUNT; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(99,102,241,0.8)";
    ctx.fill();
  });

  for (let i = 0; i < COUNT; i++) {
    for (let j = i + 1; j < COUNT; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 120) {
        ctx.strokeStyle = `rgba(99,102,241,${1 - dist / 120})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(animate);
}

animate();


const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.classList.add("compact");
  } else {
    header.classList.remove("compact");
  }
});



// ===== ANIMAÇÃO AO SCROLL =====
const scrollElements = document.querySelectorAll(
  ".card, .project-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show"); // remove se sair da tela
      }
    });
  },
  {
    threshold: 0.15 // porcentagem visível para ativar
  }
);

scrollElements.forEach(el => {
  el.classList.add("fade-scroll");
  observer.observe(el);
});
