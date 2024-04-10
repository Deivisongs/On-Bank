import {useNavigate} from "react-router-dom";

//CSS
import style from "./Transferir.module.css"


function Transferir(){

    const navigate = useNavigate()

    function RealizandoTranferencia(){
        alert("Transferência Realizada");
        return navigate("/");

    }
    return(
        <section className={style.sectionPrincipal}>
            <section className={style.sectionContainer}>
                <h2 className={style.h2}>Transferência</h2>
                <form className={style.form}>
                    <input type="text" name="agencia" id="agencia" placeholder="Agencia"/>
                    <input type="text" name="conta" id="conta" placeholder="Conta"/>
                    <input type="text" name="valor" id="valor" placeholder="100,00"/>
                    <p className={style.p}>Data transferência:</p>
                    <input type="date" name="data" id="data" />
                    <button onClick={RealizandoTranferencia}>Pagar</button>
                </form>
            </section>
        </section>
    )
}

export default Transferir