import { useState, useEffect } from "react";

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
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
    <div id="about" className={isScrolled ? "scrolled" : ""}>
      <h2>SOMOS UMA ACADEMIA DE ALTA QUALIDADE, DEDICADA À SAÚDE E BEM-ESTAR ACESSÍVEIS.</h2>
      <div>
        <p>A Império é uma academia para você </p>
        <p>frequentar do seu jeito, e fazer o seu melhor. Ao </p>
        <p>associar-se, você terá acesso a uma programação </p>
        <p>digital e presencial na academia para ajudá-lo a </p>
        <p>atingir seus objetivos de condicionamento físico.</p>
        <p>Veja abaixo todos os serviços oferecidos pela academia.</p>
      </div>
    </div>
  );
}
