import { Link } from "react-router-dom";

import imagem1 from '../assets/corredor.jpg';
import imagem2 from '../assets/dancarina.jpg';
import Header from "./Header";
import Form from "./Form";
import About from "./About";
import Comodity from "./Comodity";

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
    </>
  )
}