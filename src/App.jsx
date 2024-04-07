import NavBar from "./components/NavBar/NavBar"
import SectionSaldo from "./components/Sections/SectionSaldo/SectionSaldo"
import SectionDiaaDia from "./components/Sections/SectionDiaaDia/SectionDiaaDia"
import SectionTransacoes from "./components/Sections/SectionTransacoes/SectionTranscoes"

function App() {

  return (
    <>
      <NavBar />
      <SectionSaldo />
      <SectionDiaaDia />
      <SectionTransacoes />
    </>
  )
}

export default App
