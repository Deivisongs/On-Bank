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
                    <BtnDiaaDia
                    img={boleto}
                    descricao="imagem botão boleto"
                    nome="Pagar"
                    />
                    <BtnDiaaDia 
                    img={transferir}
                    descricao="Imagem botão Descrição"
                    nome="Transferir"
                    />
                    <BtnDiaaDia 
                    img={recarga}
                    descricao="Imagem botão recarga"
                    nome="Recarga"
                    />
                    <BtnDiaaDia 
                    img={depositar}
                    descricao="Imagem botão deposito"
                    nome="Depósito"
                    />
                    <BtnDiaaDia 
                    img={retirar}
                    descricao="Imagem botão Sacar"
                    nome="Sacar"
                    />
                </div>
            </section>
        </section>
    )
}

export default SectionDiaaDia