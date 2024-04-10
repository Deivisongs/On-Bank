import { useState } from "react";
import {useNavigate} from "react-router-dom";

//CSS
import style from "./Deposito.module.css"


function Deposito(){
    const [escolhaConta, setConta] = useState("");

    const navigate = useNavigate()

    function RealizandoDeposito(){
        alert("Depósito Realizado");
        return navigate("/");

    }
    return(
        <section className={style.sectionPrincipal}>
            <section className={style.sectionContainer}>
                <h2 className={style.h2}>Depósito</h2>
                <form className={style.form}>
                    <select name="escolhaConta" id="escolhaConta" onChange={(e) => setConta(e.target.value)}>
                        <option value="0">Conta para depósito...</option>
                        <option value="1">Minha Conta</option>
                        <option value="2">Outra Conta</option>
                    </select>
                    {escolhaConta === "2" && (
                        <>
                            <input type="text" name="agencia" id="agencia" placeholder="Agência*" autoComplete="off"/>
                            <input type="text" name="conta" id="conta" placeholder="Conta*" autoComplete="off"/>
                        </>
                    )}
                    <input type="text" name="valor" id="valor" placeholder="Valor Deposito" autoComplete="off"/>
                    <button onClick={RealizandoDeposito}>Depositar</button>
                </form>
            </section>
        </section>
    )
}

export default Deposito