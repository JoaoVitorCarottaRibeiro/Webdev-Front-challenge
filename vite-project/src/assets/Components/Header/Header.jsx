import { Link } from 'react-router-dom'
import '../Header/header.css'

export default function Header(){
    return(
        <>
        <div className="header">
        <nav className='navegacao'>
            <Link to="/">
                <img className='logo' src="../../../../public/Imagens/Logo_Sprint1_sem_fundo.png" alt="logo" />
            </Link>
            <Link to="/aovivo">Ao vivo</Link>  
            <Link to="/apostas">Apostas</Link>
            <Link to="/impactos">Impactos</Link>
            <Link to="/formulae">Formula-E</Link>
            <button className='btnUser' id='BtnUser'>
                <img className='UserIMG' src="../../../../public/Imagens/UserIMG2.png" alt="login img"/>
            </button>
        </nav>
        </div>
        </>
    )
}