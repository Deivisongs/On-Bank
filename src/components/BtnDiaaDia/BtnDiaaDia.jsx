import React from "react"
import style from "./BtnDiaaDia.module.css"

function BtnDiaaDia({nome, img, descricao}){
    return(
        <button className={style.button}>
            <div className={style.divImg}>
                <img src={img} alt={descricao} />
            </div>
            <p>{nome}</p>
        </button>
    )
}

export default BtnDiaaDia