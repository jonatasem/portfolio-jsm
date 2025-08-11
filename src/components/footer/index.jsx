import '../../styles/footerComponent.scss';

import imgWhatsapp from '/images/footer/whatsapp.svg'
import imgEmail from '/images/footer/email.svg'

export default function FooterComponent(){
    return (
        <footer className="container-footer">
            <article className="rede-social">
                <ul>
                    <li><img src={imgEmail} alt="email" />jonatas.em25@gmail.com</li>
                    <li><img src={imgWhatsapp} alt="whatsapp" />+ 55 (18) 99193-7096</li>
                </ul>
            </article>
            <p>JSM - Todos os direitos reservados.</p>
        </footer>
    )
}