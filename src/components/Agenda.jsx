import Header from "./Header";
import Footer from "./Footer";
import styles from './Agenda.module.css';
import MiniForm from "./MiniForm";

export default function Agenda() {
  return (
    <>
      <Header />
      <div className={styles.header}></div>
      <div className={styles.agenda}>
        <h1>Segunda-Feira</h1>
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