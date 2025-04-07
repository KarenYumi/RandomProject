import { useState, useEffect } from "react";

import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import styles from './Agenda.module.css';
import MiniForm from "../../shared/MiniForm";

export default function Agenda() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Pequeno delay para suavizar

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <Header />
      <div className={styles.header}></div>
      <div className={`${styles.agenda} fade-in ${isVisible ? "visible" : ""}`}>
        <h1>Segunda-Feira</h1>
        <div className={styles.horario}>
          <div>
            <h2>Boxe 08h-09h</h2>
            <p>Localização: Pinheiros</p>
            <p>Instrutor: Ana Carolina</p>
          </div>
          <div>
            <h2>Boxe 08h-09h</h2>
            <p>Localização: Pinheiros</p>
            <p>Instrutor: Ana Carolina</p>
          </div>
          <button>Agendar Aula</button>
        </div>
      </div>
      <div className={styles.agenda}>
        <h1>Terça-Feira</h1>
        <div className={styles.horario}>
          <div >
            <h2>Boxe 08h-09h</h2>
            <p>Localização: Pinheiros</p>
            <p>Instrutor: Ana Carolina</p>
          </div>
          <div>
            <h2>Boxe 08h-09h</h2>
            <p>Localização: Pinheiros</p>
            <p>Instrutor: Ana Carolina</p>
          </div>
          <button>Agendar Aula</button>
        </div>
        
      </div>
      <div className={styles.agenda}>
        <h1>Quarta-Feira</h1>
        <div className={styles.horario}>
          <div >
            <h2>Boxe 08h-09h</h2>
            <p>Localização: Pinheiros</p>
            <p>Instrutor: Ana Carolina</p>
          </div>
          <div>
            <h2>Boxe 08h-09h</h2>
            <p>Localização: Pinheiros</p>
            <p>Instrutor: Ana Carolina</p>
          </div>
          <button>Agendar Aula</button>
        </div>
      </div>
      <div className={styles.agenda}>
        <h1>Quinta-Feira</h1>
        <div className={styles.horario}>
          <div >
            <h2>Boxe 08h-09h</h2>
            <p>Localização: Pinheiros</p>
            <p>Instrutor: Ana Carolina</p>
          </div>
          <div>
            <h2>Boxe 08h-09h</h2>
            <p>Localização: Pinheiros</p>
            <p>Instrutor: Ana Carolina</p>
          </div>
          <button>Agendar Aula</button>
        </div>
      </div>
      <div className={styles.agenda}>
        <h1>Sexta-Feira</h1>
        <div className={styles.horario}>
          <div >
            <h2>Boxe 08h-09h</h2>
            <p>Localização: Pinheiros</p>
            <p>Instrutor: Ana Carolina</p>
          </div>
          <div>
            <h2>Boxe 08h-09h</h2>
            <p>Localização: Pinheiros</p>
            <p>Instrutor: Ana Carolina</p>
          </div>
          <button>Agendar Aula</button>
        </div>
      </div>
      <div className={styles.agenda}>
        <h1>Sábado</h1>
        <div className={styles.horario}>
          <div >
            <h2>Boxe 08h-09h</h2>
            <p>Localização: Pinheiros</p>
            <p>Instrutor: Ana Carolina</p>
          </div>
          <div>
            <h2>Boxe 08h-09h</h2>
            <p>Localização: Pinheiros</p>
            <p>Instrutor: Ana Carolina</p>
          </div>
          <button>Agendar Aula</button>
        </div>
      </div>
      <div className={styles.agenda}>
        <h1>Domingo</h1>
        <div className={styles.horario}>
          <div >
            <h2>Boxe 08h-09h</h2>
            <p>Localização: Pinheiros</p>
            <p>Instrutor: Ana Carolina</p>
          </div>
          <div>
            <h2>Boxe 08h-09h</h2>
            <p>Localização: Pinheiros</p>
            <p>Instrutor: Ana Carolina</p>
          </div>
          <button>Agendar Aula</button>
        </div>
      </div>
      <MiniForm />
      <Footer />
    </>
  )
}