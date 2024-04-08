import {useNavigate, useLocation} from "react-router-dom";

//CSS
import style from "./Pagar.module.css"

function Pagar(){
const {state} = useLocation();
const {prop1} = state || {};
console.log(state)
console.log(prop1)

const navigate = useNavigate()

function RealizandoPagamento(){
    alert("Pagamento Realizado");
    return navigate("/");

}
    return(
        <section className={style.sectionPrincipal}>
            <section className={style.sectionContainer}>
                <h1>Pagamento</h1>
                <div className={style.form}>
                    <input type="text" placeholder="Numero do Boleto*"/>
                    <input type="text" placeholder="Descrição"/>
                    <input type="text" placeholder="Valor a Pagar*"/>
                    <input type="date" name="date" id="date"/>
                    <button onClick={RealizandoPagamento}>Pagar</button>
                </div>
                
            </section>
        </section>
    )
};
export default Pagar;