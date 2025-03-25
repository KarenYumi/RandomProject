import { useState, useEffect } from "react";

export default function Form() {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const aboutSection = document.getElementById("descricao");
        if (!aboutSection) return;
  
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (sectionTop < windowHeight * 0.75) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <div className='form'>
      <div id="descricao" className={isScrolled ? "scrolled" : ""}>
        <h2>AGENDAR UMA VISITA</h2>
        <p>Faça um teste gratuito de 30 minutos em qualquer um dos nossos estabelecimentos para decidir se a Klipsan é a academia certa para você. Você poderá experimentar os equipamentos, observar as aulas e receber respostas diretas para todas as suas perguntas.</p>
      </div>
      <form>
        <label>Name Completo</label>
        <input type='text' placeholder='Nome' />
        <label>E-mail</label>
        <input type='text' placeholder='E-mail' />
        <label>Data de visita</label>
        <input type='date' placeholder='Data' />
        <button>Enviar</button>
      </form>
    </div>
  )
}