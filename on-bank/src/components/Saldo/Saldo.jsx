import style from "./Saldo.module.css"

function Saldo(){
    return(
        <div className={style.divComponent}>
            <p>Conta</p>
            <div className={style.divPrincipalSaldo}>
                <div>
                    <p>Saldo disponível em conta</p>
                    <p className={style.pSaldo}>R$ 100,00</p>
                </div>
                <div>
                    <button>
                        <span className="material-symbols-outlined">visibility</span>
                    </button>
                </div>
            </div>
            <a href="#">Ver Extrato</a>
        </div>
    )
}
export default Saldo