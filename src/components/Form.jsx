import { useState, useEffect } from "react";

export default function Form() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  function handleSubmit() {
    if (!email && !name && !date) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    if (!validateEmail(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowModal(true);
      setEmail('');
    }, 1500);
  }

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
        <input type='text' placeholder='Nome' value={name} />
        <label>E-mail</label>
        <input type='text' placeholder='E-mail' value={email} />
        <label>Data de visita</label>
        <input type='date' placeholder='Data' value={date} />
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  )
}