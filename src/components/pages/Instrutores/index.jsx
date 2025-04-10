import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import './Instrutores.css';
import instru1 from '../../../assets/instrutores/instrutora1.jpg';
import instru2 from '../../../assets/instrutores/instrutora2.jpg';
import instru3 from '../../../assets/instrutores/instrutora3.jpg';
import instru4 from '../../../assets/instrutores/instrutora4.jpg';
import instru5 from '../../../assets/instrutores/instrutora5.jpg';
import instru6 from '../../../assets/instrutores/instrutora6.jpg';
import MiniForm from "../../shared/MiniForm";


export default function Instrutores() {
  return (
    <>
      <Header />
      <div className='fotos-instrutores'>
        <div className="instrutor-container">
          <img src={instru1} id='instrutora1' />
          <div className="instrutor-info">
            <h2>NICOLE WINTER</h2>
            <p>Stretching</p>
          </div>
        </div>
        <div className="instrutor-container">
          <img src={instru4} id='instrutora4' />
          <div className="instrutor-info">
            <h2>AARON HUGHES</h2>
            <p>PILATES, IOGA</p>
          </div>
        </div>
        <div className="instrutor-container">
          <img src={instru3} id='instrutora3' />
          <div className="instrutor-info">
            <h2>DEMERA SAWYERS</h2>
            <p>CARDIO, CORE</p>
          </div>
        </div>
        <div className="instrutor-container">
          <img src={instru6} id='instrutora6' />
          <div className="instrutor-info">
            <h2>PAULO SANTOS</h2>
            <p>DANÇA, ZUMBA</p>
          </div>
        </div>
        <div className="instrutor-container">
          <img src={instru2} id='instrutora2' />
          <div className="instrutor-info">
            <h2>MELANNIE HORTCH</h2>
            <p>TREINAMENTO DE FORÇA, BOXE</p>
          </div>
        </div>
        <div className="instrutor-container">
          <img src={instru5} id='instrutora5' />
          <div className="instrutor-info">
            <h2>ANA PEREIRA</h2>
            <p>CROSSFIT, HIIT</p>
          </div>
        </div>
      </div>
      <MiniForm />
      <Footer />
    </>
  )
}