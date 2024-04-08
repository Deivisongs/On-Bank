import React from "react";

//CSS
import style from "./Error.module.css"

function Error(){
    return(
        <div className={style.div}>
            <span className="material-symbols-outlined">warning</span>
            <h2 className={style.h2}>Pagina não Encontrada...</h2>
        </div>
    )
}
export default Error