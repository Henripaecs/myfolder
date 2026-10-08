// ==========================================
// 1. RENDERIZAÇÃO DOS PROJETOS
// ==========================================
const projects = [
    {
        title: "Profix",
        description: "Plataforma Full Stack, desenvolvida em equipe, que conecta clientes a prestadores de serviços residenciais. A validação automática de documentos com Azure Cognitive Services elimina a checagem manual no cadastro. Atuei na modelagem do banco, na arquitetura e na integração entre frontend e backend.",
        link: "https://github.com/Henripaecs/CienciaDaComputacao/tree/main/Profix",
        tools: ["Java", "Spark Framework", "PostgreSQL", "Azure Cognitive Services", "JavaScript"]
    },
    {
        title: "Automação de Orçamentos com IA",
        description: "Sistema criado para uma empresa de instalação de ar-condicionado que automatiza o atendimento inicial. Ele interpreta as solicitações dos clientes e gera respostas e orçamentos, reduzindo o tempo de resposta e o esforço manual da equipe comercial.",
        tools: ["Node.js", "Google Gemini API"]
    },
    {
        title: "Maquininha de Finanças ESTRELA",
        description: "Aplicação Web para gestão financeira de jogos de tabuleiro.",
        link: "https://henripaecs.github.io/BancoImobiliario/",
        tools: ["JavaScript", "HTML5", "CSS3"]
    },
    {
        title: "Algoritmos de Ordenação",
        description: "Implementação e análise de complexidade (Big O) de Quick Sort, Shell Sort e árvores balanceadas.",
        link: "https://github.com/Henripaecs/CienciaDaComputacao/tree/main/AEDs2",
        tools: ["C", "Java", "Estrutura de Dados"]
    }
];

const container = document.getElementById('project-container');

if (container) {
    container.innerHTML = '';
    projects.forEach(project => {
        // Pega a lista de ferramentas e transforma em tags HTML
        const toolsHtml = project.tools.map(tool => `<span class="project-tool">${tool}</span>`).join('');

        const card = `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tools">
                    ${toolsHtml}
                </div>
                ${project.link ? `<a href="${project.link}" target="_blank" class="btn">Ver Projeto</a>` : ''}
            </div>
        `;
        container.innerHTML += card;
    });
}

// ==========================================
// 2. EFEITOS DE SCROLL E BOTÕES
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const contactButtons = document.querySelectorAll('.contact-button');

window.addEventListener('scroll', () => {
    const sectionPos = document.getElementById('contact').getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if(sectionPos < screenPos) {
        contactButtons.forEach((btn, index) => {
            setTimeout(() => {
                btn.style.opacity = "1";
                btn.style.transform = "translateY(0)";
            }, index * 100);
        });
    }
});

// Navbar: sombra ao rolar e link ativo conforme a seção
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('nav ul a');
const sections = [...document.querySelectorAll('header[id], section[id]')];

function updateNav() {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    const y = window.scrollY + window.innerHeight / 3;
    const current = sections.filter(sec => sec.offsetTop <= y).pop();
    navLinks.forEach(a => a.classList.toggle('active', current && a.getAttribute('href') === '#' + current.id));
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// ==========================================
// 3. FUNDO ANIMADO (Fica por último)
// ==========================================
tsParticles.load("tsparticles", {
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
            resize: true,
        },
        modes: {
            grab: { distance: 140, links: { opacity: 0.5 } },
            push: { quantity: 4 }
        },
    },
    particles: {
        color: { value: ["#38bdf8", "#818cf8"] },
        links: {
            color: "#818cf8",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
        },
        move: { enable: true, speed: 1.5 },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: { value: 0.35 },
        size: { value: { min: 1, max: 3 } },
    }
});