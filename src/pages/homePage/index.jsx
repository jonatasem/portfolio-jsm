//logotipos
import imgHcl from "/images/home/hcl.png";
import imgMicrosoft from "/images/home/microsoft.png";
import imgInfosys from "/images/home/infosys.png";
import imgWipro from "/images/home/wipro.png";
import imgIbm from "/images/home/ibm.png";

//arrow
import imgArrow from "/images/home/arrow.png";

//redes sociais
import imgBehance from "/images/home/redesocial/behance.svg";
import imgFacebook from "/images/home/redesocial/facebook.svg";
import imgGithub from "/images/home/redesocial/github.svg";
import imgInstagram from "/images/home/redesocial/instagram.svg";
import imgLinkedin from "/images/home/redesocial/linkedin.svg";

export default function HomePage(){
    return (
        <section className="container-home">
            <article className="home-header">
                <ul>
                    <li>
                       <a href="https://www.facebook.com/people/Jonatas-Elieser-Moreira/100079143820691">
                            <img src={imgFacebook} alt="image rede social" />
                       </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/jonatas.e.moreira/">
                            <img src={imgInstagram} alt="image rede social" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/jonatasem">
                            <img src={imgGithub} alt="image rede social" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jonatasem">
                            <img src={imgLinkedin} alt="image rede social" />
                        </a>
                    </li>
                    <li>
                        <img src={imgBehance} alt="image rede social" />
                    </li>
                </ul>
            </article>
            <article className="home-main">
                <div className="layout-home-main">
                    <div className="home-apresentation">
                        <h1>Jonatas M</h1>
                        <h2>Desenvolvedor Frontend</h2>
                        <p>Profissional com 2 anos de experiência, focado no desenvolvimento frontend.</p>
                    </div>
                    <div className="lets-talk">
                        <button>
                            <a href="#contact">
                                Vamos Conversar
                            </a>
                        </button>
                        <button>
                            <a href="#projects">
                                Explore meus trabalhos
                            </a>
                        </button>
                    </div>
                    <div className='show-more-home'>
                        <button>
                            <a href="#about">Ver mais</a>
                        </button>
                        <img src={imgArrow} alt="imagem arrow" />
                    </div>
                </div>
            </article>
            <article className="home-footer">
                <ul>
                    <li>
                        <img src={imgHcl} alt="imagem logo marca" />            
                    </li>
                    <li>
                        <img src={imgMicrosoft} alt="imagem logo marca" />                                
                    </li>
                    <li>
                        <img src={imgInfosys} alt="imagem logo marca" />                                
                    </li>
                    <li>
                        <img src={imgWipro} alt="imagem logo marca" />                                
                    </li>
                    <li>
                        <img src={imgIbm} alt="imagem logo marca" />                                
                    </li>
                    <li>
                        <img src={imgHcl} alt="imagem logo marca" />                                
                    </li>
                    <li>
                        <img src={imgMicrosoft} alt="imagem logo marca" />                                
                    </li>
                    <li>
                        <img src={imgInfosys} alt="imagem logo marca" />                                
                    </li>
                </ul>
            </article>
        </section>
    );
};
