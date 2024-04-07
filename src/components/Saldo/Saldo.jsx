import React, {useState} from "react";
import style from "./Saldo.module.css";


const valor = "100,00"
const mostrar = "R$ " + valor


function Saldo(){
    const [ver, setVer] = useState(false)

    function visivel(){
        setVer(!ver);
    }
    return(
        <div className={style.divComponent}>
            <p>Conta</p>
            <div className={style.divPrincipalSaldo}>
                <div>
                    <p>Saldo disponível em conta</p>
                    <p className={style.pSaldo}>{ver ? mostrar : "--"}</p>
                </div>
                <div>
                    <button onClick={visivel}>
                        <span className="material-symbols-outlined">{ver ? "visibility" : "visibility_off"}</span>
                    </button>
                </div>
            </div>
            <a href="#">Ver Extrato</a>
        </div>
    )
}
export default Saldo