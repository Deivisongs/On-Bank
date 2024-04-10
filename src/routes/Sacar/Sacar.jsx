import {useNavigate} from "react-router-dom";

//CSS
import style from "./Sacar.module.css"


function Sacar(){

    const navigate = useNavigate()

    function RealizandoSaque(){
        alert("Saque Realizado...");
        return navigate("/");

    }
    return(
        <section className={style.sectionPrincipal}>
            <section className={style.sectionContainer}>
                <h2 className={style.h2}>Saque Imediato</h2>
                <form className={style.form}>
                    <p>Valor para Saque:</p>
                    <input type="text" name="valor" id="valor" placeholder="R$100,00"/>
                    <button onClick={RealizandoSaque}>Realizar Saque...</button>
                </form>
            </section>
        </section>
    )
}

export default Sacar