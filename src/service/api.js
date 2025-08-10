//imagens dos projetos
import imgGraphic from "/images/projects/web-graphic.jpg";
import imgRestaurant from "/images/projects/web-ecommerce.png";
import imgAutomec from "/images/projects/web-dashboard.png";
import imgMovies from "/images/projects/web-movies.png";
import imgHeadset from "/images/projects/web-headset.png";

// Imagens das habilidades
import imgHtml from '/images/skills/html.svg';
import imgCss from '/images/skills/css.svg';
import imgJs from '/images/skills/js.svg';
import imgReact from '/images/skills/react.svg';
import imgNode from '/images/skills/node.svg';
import imgMongodb from '/images/skills/mongodb.svg';
import imgVercel from '/images/skills/vercel.svg';

import imgLinux from '/images/skills/linux.svg'
import imgWindows from '/images/skills/windows.svg'
import imgMac from '/images/skills/mac.svg';
import imgNext from '/images/skills/next.svg'
import imgGithub from '/images/skills/github.svg'

//faltou
/*
import imgExpress from '/images/skills/express.svg';
import imgRender from '/images/skills/render.svg';
*/
// Dados das habilidades
export const skillsData = [
    {
        title: "Frontend",
        info: [
            "Criação de interfaces de usuário dinâmicas e responsivas.",
            "Desenvolvimento de componentes interativos e reutilizáveis.",
            "Otimização para performance e acessibilidade."
        ],
        skills: [
            { name: "HTML", image: imgHtml },
            { name: "CSS", image: imgCss },
            { name: "JavaScript", image: imgJs },
            { name: "React", image: imgReact },
            { name: "Next", image: imgNext }
        ]
    },
    {
        title: "Backend",
        info: [
            "Construção de APIs robustas e escaláveis.",
            "Gerenciamento de banco de dados e autenticação de usuários.",
            "Implementação de lógica de negócios e integrações com serviços externos."
        ],
        skills: [
            { name: "Node.js", image: imgNode },
            { name: "Express", image: imgVercel },
            { name: "MongoDB", image: imgMongodb }
        ]
    },
    {
        title: "DevOps",
        info: [
            "Implantação e gerenciamento de aplicações em ambientes de produção.",
            "Configuração de pipelines de integração e entrega contínuas (CI/CD).",
            "Monitoramento e manutenção de sistemas."
        ],
        skills: [
            { name: "Vercel", image: imgVercel },
            { name: "Render", image: imgVercel }
        ]
    },
    {
        title: "Sistemas Operacionais",
        info: [
            "Configuração e administração de sistemas para ambientes de desenvolvimento e produção.",
            "Utilização de linha de comando (CLI) e scripts para automação de tarefas."
        ],
        skills: [
            { name: "Linux", image: imgLinux },
            { name: "Windows", image: imgWindows },
            { name: "macOS", image: imgMac }
        ]
    }
];

// Dados dos projetos
export const projectsData = [
    {
        title: "Dashboard de Gestão",
        subTitle: "Plataforma de Visualização de Dados",
        details: [
            "Gráficos e relatórios interativos para análise de dados.",
            "Atualizações em tempo real e widgets personalizáveis para monitoramento."
        ],
        image: imgAutomec
    },
    {
        title: "Página de E-commerce",
        subTitle: "Página de Produto para Fones de Ouvido",
        details: [
            "Especificações detalhadas do produto e galeria de imagens.",
            "Sistema de avaliações e classificações de usuários."
        ],
        image: imgHeadset
    },
    {
        title: "Catálogo de Filmes",
        subTitle: "Aplicação de Recomendação de Filmes",
        details: [
            "Busca e filtro de filmes por gênero, ano e categoria.",
            "Recomendações personalizadas baseadas no histórico de visualização do usuário."
        ],
        image: imgMovies
    },
    {
        title: "Site de Restaurante",
        subTitle: "Página de Apresentação e Cardápio Online",
        details: [
            "Cardápio online com imagens de alta qualidade.",
            "Sistema de reservas integrado e informações de contato."
        ],
        image: imgRestaurant
    },
    {
        title: "Análise de Avaliações",
        subTitle: "Gráfico Interativo de Feedback",
        details: [
            "Representação visual do feedback e avaliações de usuários.",
            "Filtros para visualizar avaliações por data e nota."
        ],
        image: imgGraphic
    }
];