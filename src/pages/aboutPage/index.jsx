
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
                    <h3>- Minha experiência de trabalho</h3>
                    <p>
                        With a passion for design and over 2+ of experience, I’ve worked on diverse projects that range from mobile apps to branding and marketing campaigns. My goal is to deliver designs that are not just beautiful but functional and results-driven
                    </p>
                    <div className="button-about">
                        <button>
                            <a href="#contact">Contact</a>
                        </button>
                    </div>
                </div>
            </article>
        </section>
    )
}