// ==========================================
// 1. RENDERIZAÇÃO DOS PROJETOS
// ==========================================
const projects = [
    {
        title: "Profix",
        description: "O Profix é uma plataforma criada para conectar contratantes e prestadores de serviço de forma rápida, intuitiva e segura. Nosso objetivo é oferecer uma solução confiável e acessível, que promova eficiência no atendimento e facilite o processo de contratação, utilizando inteligência artificial para validar a identidade dos usuários por meio de documentos oficiais, garantindo mais segurança, praticidade para quem precisa de ajuda e visibilidade para quem oferece serviços.",
        link: "https://github.com/Henripaecs/CienciaDaComputacao/tree/main/Profix",
        tools: ["Java", "PostgreSQL", "HTML5", "CSS3", "JavaScript"] // <-- Ferramentas aqui!
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
                <a href="${project.link}" target="_blank" class="btn">Ver Projeto</a>
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
        color: { value: "#38bdf8" },
        links: {
            color: "#38bdf8",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
        },
        move: { enable: true, speed: 1.5 },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: { value: 0.3 },
        size: { value: { min: 1, max: 3 } },
    }
});