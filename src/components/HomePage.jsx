import { Link } from "react-router-dom";

import imagem1 from '../assets/corredor.jpg';
import imagem2 from '../assets/dancarina2.jpg';
import Header from "./Header";
import Form from "./Form";
import About from "./About";
import Comodity from "./Comodity";
import Local from "./Local";
import Footer from "./Footer";
import MiniForm from "./MiniForm";

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
      <MiniForm />
      <Footer />
    </>
  )
}