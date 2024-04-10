import {useNavigate} from "react-router-dom"

//CSS
import style from "./Recarga.module.css"

function Recarga(){
    const navigate = useNavigate()

    function RealizandoRecarga(){
        alert("Recarga Realizada");
        return navigate("/");

    }
    return(
        <section className={style.sectionPrincipal}>
            <section className={style.sectionContainer}>
                <h2 className={style.h2}>Recarga</h2>
                <form className={style.form}>
                    <input type="text" name="tel" id="tel" placeholder="(00) 00000-0000"  autoComplete="off"/>
                    <select name="operadora" id="operadora">
                        <option value="0">Operadora...</option>
                        <option value="1">Vivo</option>
                        <option value="2">Tim</option>
                        <option value="3">Claro</option>
                        <option value="4">Oi</option>
                        <option value="5">Nextel</option>
                        <option value="6">Correios</option>
                    </select>
                    <button onClick={RealizandoRecarga}>Fazer Recarga</button>
                </form>
            </section>    
        </section>    
    )
}
export default Recarga