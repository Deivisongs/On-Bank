import { Link } from "react-router-dom"

//Components
import BtnDiaaDia from "../../BtnDiaaDia/BtnDiaaDia"

// CSS
import style from "./SectionDiaaDia.module.css"

// Imagens
import boleto from "../../../assets/boleto.png"
import retirar from "../../../assets/retirar.png"
import depositar from "../../../assets/depositar.png"
import recarga from "../../../assets/recarga.png"
import transferir from "../../../assets/transferir.png"


function SectionDiaaDia(){
    return(
        <section className={style.sectionPrincipal}>
            <section className={style.sectionContainer}>
                <p className={style.pDiaaDia}>Acesso Rápido</p>
                <div>
                    <Link to="/pagar" className={style.Link}>
                        <BtnDiaaDia
                        img={boleto}
                        descricao="imagem botão boleto"
                        nome="Pagar"

                        />
                    </Link>

                    <Link to="/transferir" className={style.Link}>
                        <BtnDiaaDia 
                        img={transferir}
                        descricao="Imagem botão Descrição"
                        nome="Transferir"
                        />
                    </Link>
                    <Link to="/recarga" className={style.Link}>
                        <BtnDiaaDia 
                        img={recarga}
                        descricao="Imagem botão recarga"
                        nome="Recarga"
                        />
                    </Link>
                    <Link to="/deposito" className={style.Link}>
                        <BtnDiaaDia 
                        img={depositar}
                        descricao="Imagem botão deposito"
                        nome="Depósito"
                        />
                    </Link>
                    <Link to="/sacar" className={style.Link}>
                        <BtnDiaaDia 
                        img={retirar}
                        descricao="Imagem botão Sacar"
                        nome="Sacar"
                        />
                    </Link>
                    
                </div>
            </section>
        </section>
    )
}

export default SectionDiaaDia