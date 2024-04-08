import style from "./SectionSaldo.module.css"

import Saldo from "../../Saldo/Saldo"
import Cartao from "../../Cartao/Cartao"

function SectionSaldo(valor){
    return(
        <section className={style.sectionPrincipal}>
            <section className={style.sectionContainer}>
                <div className={style.dadosConta}>
                    <p className={style.pOla}>Olá,</p>
                    <p className={style.pUser}>Deivison Gonçalves</p>
                    <p className={style.pAgConta}>Ag: 0001 C/C: 0725486</p>
                </div>
                <div className={style.dadosSaldo}>
                    <Saldo
                    valor = {valor} />
                    <Cartao />
                </div>
                
            </section>
        </section>
    )
}


export default SectionSaldo