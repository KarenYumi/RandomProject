import { Link } from "react-router-dom";
import { useState , useEffect} from "react";

import { CartIcon, FaceIcon, InstaIcon, YoutubeIcon } from "./Icons";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 40){
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  },[])
  return (
    <header id="main-header" className={isScrolled ? 'scrolled' : ''}>
      <h1 id="title">Império</h1>
      <nav className='menu'>
        <Link className="menu-decoration">Sobre</Link>
        <Link to='/agenda' className="menu-decoration">Agenda</Link>
        <Link className="menu-decoration">Contato</Link>
        <Link className="menu-decoration">Loja</Link>
      </nav>
      <div className='login'>
        <p>Entrar</p>
        <p>Conta</p>
      </div>
      <div className="social-icons">
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