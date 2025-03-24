import { Link } from "react-router-dom";
import Header from "./Header";
import Form from "./Form";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className='home'>
        <div className="center">
          <h1>Treine no seu Tempo.</h1>
          <Link>Faça parte da nossa academia</Link>
        </div>
      </div>
      <div className='about'>
        <h2>SOMOS UMA ACADEMIA DE ALTA QUALIDADE, DEDICADA À SAÚDE E BEM-ESTAR ACESSÍVEIS.</h2>
        <p>A Império é uma academia para você frequentar do seu jeito, e fazer o seu melhor. Ao associar-se, você terá acesso a uma programação digital e presencial na academia para ajudá-lo a atingir seus objetivos de condicionamento físico. Veja abaixo todos os serviços oferecidos pela academia.</p>
      </div>
      <div className='fotos-aleatorias'> {/*colocar duas fotos*/} </div>
      <div className='servicos'>
        <h2>COMODIDADES</h2>
        <p>Na Império, sempre oferecemos novas comodidades para atender às necessidades dos nossos clientes. Você gostaria de adicionar algo à nossa lista? Envie uma sugestão.</p>
        <div className='servicos-lista'>
          <ul>
            <li>Instalações modernas</li>
            <li>•</li>
            <li>Aulas premium</li>
            <li>•</li>
            <li>Personal trainers</li>
            <li>•</li>
            <li>Parede de escalada</li>
            <li>•</li>
            <li>Ringue de boxe</li>
          </ul>
          <ul>
            <li>Sucos</li>
            <li>•</li>
            <li>Nutrição pessoal</li>
            <li>•</li>
            <li>Passes mensais para convidados</li>
            <li>•</li>
            <li>Quadras de basquete</li>
            <li>•</li>
            <li>Armários</li>
          </ul>
        </div>
      </div>
      <Form />
    </>
  )
}