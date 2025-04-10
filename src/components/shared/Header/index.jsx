import { Link, useLocation  } from "react-router-dom";
import { useState, useEffect } from "react";
import { CartIcon, MenuIcon } from "../Icons";
import DropMenu from "../../DropMenu";
import style from "./Header.module.css";

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const getHeaderClass = () => {
    if (location.pathname === '/') return style.headerHome;
    if (location.pathname === '/agenda') return style.headerAgenda;
    if (location.pathname === '/contato') return style.headerContato;
    if (location.pathname.includes('/instrutores')) return style.headerAgenda;
    return '';
  };

  return (
    <header id={style.mainHeader} className={`${isScrolled ? style.scrolled : ''} ${getHeaderClass()}`}>
      <Link id={style.title} to='/'>Império</Link>
      <nav className={`${style.menu} ${isMenuOpen ? 'open' : ''}`}>
        <DropMenu
          title="Sobre"
          options={[
            { name: "Instrutores", path: "/sobre/instrutores" },
            { name: "Aulas", path: "/sobre/aulas" },
            { name: "Preço", path: "/sobre/preço" },
          ]}
        />
        <Link to='/agenda' className={style.menuDecoration}>Agenda</Link>
        <Link to='/contato' className={style.menuDecoration}>Contato</Link>
        <Link className={style.menuDecoration}>Loja</Link>
      </nav>

      <div className={style.menuIcon} onClick={toggleMenu}> {/* CONTINUAR ISSO MAIS TARDE */}
        <MenuIcon />
      </div>
      <div>
        <p>Entrar</p>
        <p>Conta</p>
      </div>
      
      <div className={style.cart}>
        <CartIcon />
        <p>0</p>
      </div>
    </header>
  );
}
