import style from "./Cartao.module.css"

import bandeira from "../../assets/mastercard.png"

function Cartao (){
    return(
        <div className={style.divComponent}>
            <div className={style.divTop}>
                <div>
                    <p>Cartão de Crédito</p>
                    <p>5456 0853 0000 5111</p>
                </div>
                <div>
                    <a href="#">Fatura
                        <span className="material-symbols-outlined">chevron_right</span>
                    </a>
                </div>
            </div>

            <div className={style.divCenter}>
                <div>
                    <p>Limite disponível</p>
                    <p className={style.pSaldo}>R$ 3.300,00</p>
                </div>
                <div>
                    <img src={bandeira} alt="Imagem bandeira do Cartão" />
                </div>
            </div>

            <div className={style.divBotton}>
                <p>30%</p>
                <div className={style.divLimite}>
                    <div className={style.divLimiteDisp}></div>
                </div>
                <p>100%</p>
            </div>

        </div>
    )
}
export default Cartao