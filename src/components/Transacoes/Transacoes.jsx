import React from "react"
// CSS
import style from "./Transacoes.module.css"


function Transacoes({data, categoria, nome, operacao,valor}){

    const operacaoColor = operacao === "-" ? '#AC0000' : '#00DBA6';

    return(
        <div className={style.divPrincipal}>
            <div className={style.divLeft}>
                <div className={style.divDate}>
                    <p>{data}</p>
                </div>
                <hr className={style.divisao} />
                <div className={style.divDados}>
                    <p className={style.pCategoria}>{categoria}</p>
                    <p className={style.pNome}>{nome}</p>
                </div>
            </div>
            <div className={style.divVlr}>
                <p><strong style={{color: operacaoColor}}>{operacao}</strong>{valor}</p>
            </div>
        </div>
    )
}
export default Transacoes