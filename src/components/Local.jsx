import imagem1 from '../assets/corr_white.jpg';
import imagem2 from '../assets/squad_color.jpg';
import imagem3 from '../assets/aa.jpg';
import imagem4 from '../assets/bb.jpg';
import imagem5 from '../assets/dancarina.jpg';
import imagem6 from '../assets/bola.jpg';

export default function Local() {
  return (
    <>
      <div className='local'>
        <div>
          <h1>Pinheiros</h1>
          <p>R. Aldo de Azevedo 1423</p>
          <p>Alto de Pinheiros, SP</p>
          <p>11 98787-4536</p>
        </div>
        <div>
          <h1>Alphaville</h1>
          <p>Alameda Kyoto 1593</p>
          <p>Alphaville, SP</p>
          <p>11 98666-4598</p>
        </div>
      </div>
      <div className='fotos'>
        <img src={imagem2} id='squad' />
        <img src={imagem1} id='corredor' />
        <img src={imagem3} id='aa' />
        <img src={imagem5} id='dancarina' />
        <img src={imagem4} id='bb' />
        <img src={imagem6} id='bola' />
      </div>
    </>
  )
}