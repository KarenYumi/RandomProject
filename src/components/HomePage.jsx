import { Link } from "react-router-dom";

import imagem1 from '../assets/corredor.jpg';
import imagem2 from '../assets/dancarina2.jpg';
import Header from "./Header";
import Form from "./Form";
import About from "./About";
import Comodity from "./Comodity";
import Local from "./Local";
import Footer from "../Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className='home'>
        <div className="center">
          <div style={{ padding: '2rem' }}>
            <h1>Treine no seu </h1>
            <h1>Tempo.</h1>
          </div>
          <Link className='center-link'>Faça parte da nossa academia</Link>
        </div>
      </div>
      <About />
      <div className='fotos-aleatorias'>
        <img src={imagem1} id='corredor' />
        <img src={imagem2} id='dancarina' />
      </div>
      <Comodity />
      <Form />
      <div className='frase'>
        <div>
          <h1>“A Império FOI FUNDAMENTAL PARA AJUDAR A MELHORAR MINHA RESISTÊNCIA PARA CORRER A MARATONA.”</h1>
          <p>-Willian Guilherme</p>
        </div>
      </div>
      <Local />
      <div className='mini-form'>
        <div>
          <h1>FIQUE POR DENTRO</h1>
          <p>Cadastre-se e seja o primeiro a saber sobre novas aulas, comodidades e mais. Respeitamos sua privacidade e nunca compartilharemos suas informações com fornecedores externos.</p>
        </div>
        <div className="form-mini">
          <input type='text' placeholder='E-mail' />
          <button>Cadastre-se</button>
        </div>
      </div>
      <Footer />
    </>
  )
}