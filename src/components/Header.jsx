import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CartIcon, FaceIcon, InstaIcon, YoutubeIcon, MenuIcon } from "./Icons";
import DropMenu from "./DropMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controle do menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna o menu principal
  };

  return (
    <header id="main-header" className={isScrolled ? 'scrolled' : ''}>
      <Link id="title" to='/'>Império</Link>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <DropMenu
          title="Sobre"
          options={[
            { name: "Instrutores", path: "/historia" },
            { name: "Aulas", path: "/missao-valores" },
            { name: "Preço", path: "/equipe" },
          ]}
        />
        <Link to='/agenda' className="menu-decoration">Agenda</Link>
        <Link to='/contact' className="menu-decoration">Contato</Link>
        <Link className="menu-decoration">Loja</Link>
      </nav>

      <div className="menu-icon" onClick={toggleMenu}> {/* CONTINUAR ISSO MAIS TARDE */}
        <MenuIcon />
      </div>

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
  );
}
