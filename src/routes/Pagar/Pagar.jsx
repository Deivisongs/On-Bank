import {useNavigate} from "react-router-dom";

//CSS
import style from "./Pagar.module.css"

function Pagar(){


const navigate = useNavigate()

function RealizandoPagamento(){
    alert("Pagamento Realizado");
    return navigate("/");

}
    return(
        <section className={style.sectionPrincipal}>
            <section className={style.sectionContainer}>
                <h2 className={style.h2}>Pagamento</h2>
                <div className={style.form}>
                    <input type="text" placeholder="Numero do Boleto*" autoComplete="off"/>
                    <input type="text" placeholder="Descrição" autoComplete="off"/>
                    <input type="text" placeholder="100,00*" autoComplete="off"/>
                    <p className={style.p}>Data para pagamento:</p>
                    <input type="date" name="date" id="date"/>
                    <button onClick={RealizandoPagamento}>Pagar</button>
                </div>
                
            </section>
        </section>
    )
};
export default Pagar;