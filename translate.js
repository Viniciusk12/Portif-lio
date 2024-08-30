// Conteúdo em Português (pt)
const contentPT = {
    heroTitle: "Olá, sou Vinícius Machado",
    heroText: "Desenvolvedor Web especializado em HTML e CSS, estudante de JS.",
    sobreMimTitle: "Sobre Mim",
    sobreMimText: "Sou Vinícius Machado, desenvolvedor web com experiência em HTML, CSS e em constante evolução no estudo de JavaScript. Tenho paixão por criar interfaces intuitivas e responsivas, e trabalho em projetos pessoais que me desafiam a aprender e aplicar novas tecnologias. Este portfólio foi criado para compartilhar um pouco do meu trabalho, minhas habilidades e a dedicação que coloco em cada projeto.",
    projetosTitle: "Meus Projetos",
    projeto1Title: "Conto de Essos",
    projeto1Desc: "Um projeto pessoal, de um site destinado a ser uma pequena biblioteca para materiais de Role Play Games.",
    projeto2Title: "FA Engenharia de Projetos",
    projeto2Desc: "Um site comercial destinado a usuários que buscam o apoio logístico de um engenheiro para seus projetos. (AINDA EM DESENVOLVIMENTO)",
    contatoTitle: "Contato",
    placeholderName: "Nome",
    placeholderEmail: "E-mail",
    placeholderMessage: "Mensagem",
    footerText: "© 2024 Vinícius Machado. Todos os direitos reservados.",
    linkSobreMim: "Sobre Mim",
    linkProjetos: "Projetos",
    linkContato: "Contato"
};

// Conteúdo em Espanhol (es)
const contentES = {
    heroTitle: "Hola, soy Vinícius Machado",
    heroText: "Desarrollador Web especializado en HTML y CSS, estudiante de JS.",
    sobreMimTitle: "Sobre Mí",
    sobreMimText: "Soy Vinícius Machado, desarrollador web con experiencia en HTML, CSS y en constante evolución en el estudio de JavaScript. Me apasiona crear interfaces intuitivas y responsivas, y trabajo en proyectos personales que me desafían a aprender y aplicar nuevas tecnologías. Este portafolio fue creado para compartir un poco de mi trabajo, mis habilidades y la dedicación que pongo en cada proyecto.",
    projetosTitle: "Mis Proyectos",
    projeto1Title: "Cuento de Essos",
    projeto1Desc: "Un proyecto personal, de un sitio destinado a ser una pequeña biblioteca para materiales de Juegos de Rol.",
    projeto2Title: "FA Ingeniería de Proyectos",
    projeto2Desc: "Un sitio comercial destinado a usuarios que buscan el apoyo logístico de un ingeniero para sus proyectos. (TODAVÍA EN DESARROLLO)",
    contatoTitle: "Contacto",
    placeholderName: "Nombre",
    placeholderEmail: "Correo electrónico",
    placeholderMessage: "Mensaje",
    footerText: "© 2024 Vinícius Machado. Todos los derechos reservados.",
    linkSobreMim: "Sobre Mí",
    linkProjetos: "Proyectos",
    linkContato: "Contacto"
};

// Função para trocar conteúdo
function traduzirPara(lang) {
    const content = lang === 'pt' ? contentPT : contentES;

    // Atualizando o conteúdo da página
    document.querySelector('.hero h1').innerText = content.heroTitle;
    document.querySelector('.hero p').innerText = content.heroText;
    document.querySelector('#sobre-mim h2').innerText = content.sobreMimTitle;
    document.querySelector('#sobre-mim p').innerText = content.sobreMimText;
    document.querySelector('#projetos h2').innerText = content.projetosTitle;
    document.querySelector('.projetos-grid .projeto-card:nth-child(1) h3').innerText = content.projeto1Title;
    document.querySelector('.projetos-grid .projeto-card:nth-child(1) p').innerText = content.projeto1Desc;
    document.querySelector('.projetos-grid .projeto-card:nth-child(2) h3').innerText = content.projeto2Title;
    document.querySelector('.projetos-grid .projeto-card:nth-child(2) p').innerText = content.projeto2Desc;
    document.querySelector('#contato h2').innerText = content.contatoTitle;

    // Atualizando os placeholders do formulário
    document.querySelector('.contato input[placeholder]').setAttribute("placeholder", content.placeholderName);
    document.querySelector('.contato input[type="email"]').setAttribute("placeholder", content.placeholderEmail);
    document.querySelector('.contato textarea').setAttribute("placeholder", content.placeholderMessage);

    // Atualizando o texto dos links do header
    document.querySelector('nav ul li a[href="#sobre-mim"]').innerText = content.linkSobreMim;
    document.querySelector('nav ul li a[href="#projetos"]').innerText = content.linkProjetos;
    document.querySelector('nav ul li a[href="#contato"]').innerText = content.linkContato;

    // Atualizando o texto do footer
    document.querySelector('footer p').innerText = content.footerText;

    // Atualizar o estado dos botões de tradução
    const btnPT = document.getElementById('btn-pt');
    const btnES = document.getElementById('btn-es');

    if (lang === 'pt') {
        btnPT.classList.add('active');
        btnES.classList.remove('active');
    } else {
        btnES.classList.add('active');
        btnPT.classList.remove('active');
    }
}

// Adicionar event listeners para os botões
document.getElementById('btn-pt').addEventListener('click', () => traduzirPara('pt'));
document.getElementById('btn-es').addEventListener('click', () => traduzirPara('es'));

// Traduzir para o português por padrão
traduzirPara('pt');
