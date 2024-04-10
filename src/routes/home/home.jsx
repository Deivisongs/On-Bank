import { useState } from "react";
import React from "react";

//components
import SectionSaldo from "../../components/Sections/SectionSaldo/SectionSaldo";
import SectionDiaaDia from "../../components/Sections/SectionDiaaDia/SectionDiaaDia";
import SectionTransacoes from "../../components/Sections/SectionTransacoes/SectionTranscoes";


function Home(){
    const [valor, setValor] = useState(1567.75);
    return(
        <>
        <SectionSaldo 
        valor = {valor}
        />
        <SectionDiaaDia />
        <SectionTransacoes />
        </>
    )
};

export default Home;