//CSS
import style from "./Footer.module.css"


function Footer(){
    return(
        <footer className={style.footer}>
            <p className={style.pFooter}><strong>On Bank</strong> © 2024 - Todos os Direitos Reservados | Desenvolvido por <strong>Deivison Gonçalves</strong></p>
        </footer>
    )
}
export default Footer