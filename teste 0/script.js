const toggleThemeButton = document.getElementById('toggle-theme');

// Função para alternar o tema
toggleThemeButton.addEventListener('click', () => {
    // Alterna a classe de tema
    if (document.body.classList.toggle('dark-mode')) {
        toggleThemeButton.textContent = '☀️'; // Ícone de lua
        localStorage.setItem('theme', 'dark');
    } else {
        toggleThemeButton.textContent = '🌙'; // Ícone de sol
        localStorage.setItem('theme', 'light');
    }
});

// Carregar tema salvo ao iniciar a página
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleThemeButton.textContent = '☀️'; // Ícone de lua
    } else {
        toggleThemeButton.textContent = '🌙'; // Ícone de sol
    }
});

/* js botão de expandir */
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const button = document.getElementById("toggleButton");
    
    // Alterna a classe 'show' na seção
    section.classList.toggle("show");

    // Verifica o estado da seção e muda o texto do botão
    if (section.classList.contains("show")) {
        button.textContent = "↑"; // Muda para "Ver Menos"
    } else {
        button.textContent = "↓"; // Muda para "Ver Mais"
    }
}
  
/* typer */
const textElement = document.getElementById('text');
const textToType = "Daniel \\ Godinho";
let index = 0;

function typeText() {
    if (index < textToType.length) {
        if (textToType.charAt(index) === "\\") {
            textElement.innerHTML += "<br>";
        } else {
            textElement.innerHTML += textToType.charAt(index);
        }
        index++;
        setTimeout(typeText, 100);o
    }
    else {
        setTimeout(() => {
            textElement.innerHTML = '';
            index = 0;
            setTimeout(typeText, 500);
        }, 2000);
    }
}

window.onload = typeText;

/* sol e lua */


