import { Link } from "react-router-dom";
import { useState, useEffect} from "react";

export default function DropMenu({ title, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, [])

  const handleMouseLeave = () => {
    setTimer(setTimeout(() => setIsOpen(false), 50));
  };

  const handleMouseEnter = () => {
    if (timer) clearTimeout(timer); 
    setIsOpen(true); 
  };

  return (
    <div
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
    >
      <Link className='menu-decoration' >{title}</Link>
      {isOpen && (
        <ul id="menu-dropdown"  className={isScrolled ? 'scrolled' : ''}>
          {options.map((option, index) => (
            <li key={index} className='menu-dropdown-options'>
              <Link to={option.path}  className="menu-decoration" onClick={() => setIsOpen(false)}>{option.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>

  )
}