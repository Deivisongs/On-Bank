import React, {useState} from "react";
import style from "./Saldo.module.css";



function Saldo(valor){
    const saldoConta = valor.valor.valor;
    const mostrar = formatarMoeda(saldoConta);
    const [ver, setVer] = useState(false);

    function visivel(){
        setVer(!ver);
    }

    function formatarMoeda(saldoConta) {
        // Formata o valor para a moeda brasileira (BRL)
        return saldoConta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
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
                        <span className="material-symbols-outlined">{ver ? "visibility_off" : "visibility"}</span>
                    </button>
                </div>
            </div>
            <a href="#">Ver Extrato</a>
        </div>
    )
}

export default Saldo