//logotipos
import imgHcl from "/images/home/hcl.png";
import imgMicrosoft from "/images/home/microsoft.png";
import imgInfosys from "/images/home/infosys.png";
import imgWipro from "/images/home/wipro.png";
import imgIbm from "/images/home/ibm.png";


import '../../styles/logoCompany.scss';

export default function LogoCompany(){
    return (
        <section className="logo-company">
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
        </section>
    )
}