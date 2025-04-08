// Seleciona o botão de alternar 
const themeToggleButton = document.getElementById("theme-toggle");

// Seleciona o formulário 
const loginForm = document.getElementById("login-form");

//Botão para mostrar/ocultar o catálogo
const toggleCatalogButton = document.getElementById("toggle-catalog");

// Seleciona o elemento que contém o catálogo completo
const fullCatalog = document.getElementById("full-catalog");

/**
 * Função para alternar entre tema claro e escuro
 */
function toggleTheme() {
  
  document.body.classList.toggle("light-mode");

  // Se estiver no modo claro, ativa o efeito RGB e muda o texto do botão
  if (document.body.classList.contains("light-mode")) {
    document.body.classList.add("rgb-text");
    themeToggleButton.textContent = "☀️ Alternar tema";
  } else {
    // Se estiver no modo escuro, remove o efeito RGB e atualiza o texto do botão
    document.body.classList.remove("rgb-text");
    themeToggleButton.textContent = "🌙 Alternar tema";
  }
}

 // Função para mostrar ou ocultar o catálogo completo

function toggleCatalog() {
  // Verifica se o catálogo está visível
  const isVisible = fullCatalog.style.display !== "none";

  // Alterna entre mostrar (grid) e ocultar (none)
  fullCatalog.style.display = isVisible ? "none" : "grid";

  // Atualiza o ícone da seta no botão (▼ para oculto, ▲ para visível)
  toggleCatalogButton.querySelector("span[aria-hidden]").textContent = isVisible ? "▼" : "▲";
}

/**
 * Função para rolagem suave ao clicar em links âncora (ex: #seção)
 */
function smoothScroll(e) {
  e.preventDefault(); // Impede o comportamento padrão do link

  const targetId = this.getAttribute("href"); // Obtém o ID de destino
  const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" }); // Rola suavemente até o destino
  }
}

/**
 * Validação do formulário de login
 */
function validateLoginForm(e) {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Se algum campo estiver vazio, impede envio e mostra alerta
  if (username === "" || password === "") {
    e.preventDefault();
    alert("Preencha todos os campos!");
  }
}

// Adiciona evento de clique no botão de alternar tema
themeToggleButton.addEventListener("click", toggleTheme);

// Adiciona evento de rolagem suave para todos os links âncora da página
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", smoothScroll);
});

// Adiciona validação ao enviar o formulário de login (se existir)
if (loginForm) {
  loginForm.addEventListener("submit", validateLoginForm);
}

// Adiciona evento de clique para alternar o catálogo (se o botão existir)
if (toggleCatalogButton) {
  toggleCatalogButton.addEventListener("click", toggleCatalog);
}

// Garante que o catálogo esteja visível por padrão (se o elemento existir)
if (fullCatalog) {
  fullCatalog.style.display = "grid";
}
