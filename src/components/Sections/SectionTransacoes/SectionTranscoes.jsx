//CSS
import style from "./SectionTransacoes.module.css"

//Components
import Transacoes from "../../Transacoes/Transacoes"

function SectionTransacoes(){
    return(
        <section className={style.sectionPrincipal}>
            <section className={style.sectionContainer}>
                <p className={style.pDiaaDia}>Últimas Transações</p>
                <div className={style.divTransacoes}>
                    <Transacoes 
                    data="16 Mar"
                    categoria="Depósito"
                    nome="Deivison Gonçalves"
                    operacao="-"
                    valor="100,00"
                    />
                    <Transacoes 
                    data="16 Mar"
                    categoria="Depósito"
                    nome="Deivison Gonçalves"
                    operacao="+"
                    valor="100,00"
                    />
                </div>
            </section>
        </section>
    )
}
export default SectionTransacoes