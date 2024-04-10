import {useNavigate} from "react-router-dom";
import logo from "../../assets/logo.png"
import style from"./NavBar.module.css"


function NavBar(){

    const navigate = useNavigate()

    function home(){
        return navigate("/");
    }

    return(
        <header className={style.header}>
            <div className={style.divMain}>
                <div className={style.divLogo} onClick={home}>
                    <img src={logo} alt="logo On Bank" />
                    <h4>On <strong>Bank</strong></h4>
                </div>
                <div className={style.divSearch}>
                    <div className={style.divInput}>
                        <input type="text" name="search" id="search" placeholder="Buscar" />
                        <button>
                            <span className="material-symbols-outlined">search</span>
                        </button>
                    </div>
                    <button className={style.btnNotification}>
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    
                </div>
            </div>
            
      </header>
    )
}
export default NavBar