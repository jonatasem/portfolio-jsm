
import imgProfile from '/images/about/profile.jpg';

export default function AboutPage(){
    return (
        <section className="container-about" id='about'>
            <article className="about-head">
                <div className="profile-image">
                    <div className="layout-image">
                        <img src={imgProfile} alt="imagem do autor" />
                    </div>
                </div>
                <div className="profile-resume">
                    <h1>Um pouco sobre mim</h1>
                    <h2>- Desenvolvedor apaixonado por tecnologia e música.</h2>
                    <p>
                        Olá! Sou um Desenvolvedor Front-end com experiência na criação de soluções robustas para <strong>e-commerce</strong> e sistemas de gerenciamento de relacionamento com o cliente (<strong>CRM</strong>). 
                        Meu objetivo é construir interfaces que não apenas funcionem bem, mas que também proporcionem uma experiência de usuário agradável e intuitiva.
                    </p>
                    <p>
                        Como um <strong>autodidata</strong> curioso, estou sempre explorando novas tecnologias para aprimorar minhas habilidades. 
                        Fora do universo do código, encontro inspiração na música, tocando violão e violino, e na leitura de um bom livro.
                    </p>
                    <div className="button-about">
                        <a href="#contact">Vamos nos conectar!</a>
                    </div>
                </div>
            </article>
        </section>
    )
}


/*
import imgProfile from '/images/about/profile.jpg';

export default function AboutPage() {
    return (
        <section className="container-about" id='about'>
            <article className="about-head">
                <div className="profile-image">
                    <div className="layout-image">
                        <img src={imgProfile} alt="Foto de perfil de Jonatas Moreira" />
                    </div>
                </div>

                <div className="profile-resume">
                    <h1>Sobre Mim</h1>
                    
                    <h2>Desenvolvedor apaixonado por tecnologia e música.</h2>

                    <p>
                        Olá! Sou um Desenvolvedor Front-end com experiência na criação de soluções robustas para <strong>e-commerce</strong> e sistemas de gerenciamento de relacionamento com o cliente (<strong>CRM</strong>). 
                        Meu objetivo é construir interfaces que não apenas funcionem bem, mas que também proporcionem uma experiência de usuário agradável e intuitiva.
                    </p>
                    <p>
                        Como um <strong>autodidata</strong> curioso, estou sempre explorando novas tecnologias para aprimorar minhas habilidades. 
                        Fora do universo do código, encontro inspiração na música, tocando violão e violino, e na leitura de um bom livro.
                    </p>

                    <div className="button-about">
                        <a href="#contact">
                            Entre em Contato
                        </a>
                    </div>
                </div>
            </article>
        </section>
    )
}

*/