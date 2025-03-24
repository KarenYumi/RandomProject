import { Link } from "react-router-dom";
import { CartIcon, FaceIcon, InstaIcon, YoutubeIcon } from "./Icons";

export default function Header() {
  return (
    <header id="main-header">
      <h1 id="title">Império</h1>
      <div className='menu'>
        <Link>Sobre</Link>
        <Link to='/agenda'>Agenda</Link>
        <Link>Contato</Link>
        <Link>Loja</Link>
      </div>
      <div className='login'>
        <p>Entrar</p>
        <p>Conta</p>
      </div>
      <div>
        <InstaIcon />
        <YoutubeIcon />
        <FaceIcon />
      </div>
      <div className='cart'>
        <CartIcon />
        <p>0</p>
      </div>
    </header>
  )
}