import { useState, useEffect } from "react";

import Footer from "../../shared/Footer";
import Header from "../../shared/Header";
import MiniForm from "../../shared/MiniForm";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Pequeno delay para suavizar

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <div className='header-contato'>
        <Header />
      </div>
      <div className={`contato fade-in ${isVisible ? "visible" : ""}`}>
        <div className="lugar-contato">
          <div>
            <h1>Pinheiros</h1>
            <p>Rua Exemplo, 1234</p>
            <p>Cidade</p>
          </div>
          <div>
            <h2>Contato</h2>
            <p>email@example.com</p>
            <p>(11)111111111</p>
          </div>
        </div>
        <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.464815169482!2d-46.7086293253901!3d-23.551743961237573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57ca4e787a57%3A0x935d486dea0766f5!2sAv.%20Di%C3%B3genes%20Ribeiro%20de%20Lima%2C%20471-401%20-%20Alto%20de%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005458-000!5e0!3m2!1spt-BR!2sbr!4v1743453809533!5m2!1spt-BR!2sbr"
            allowfullscreen="" z='17' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
      </div>
      <div className='contato'>
        <div className="lugar-contato">
          <div>
            <h1>Alphaville</h1>
            <p>Rua Exemplo, 1234</p>
            <p>Cidade</p>
          </div>
          <div>
            <h2>Contato</h2>
            <p>email@example.com</p>
            <p>(11)111111111</p>
          </div>
        </div>
        <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14638.18366859502!2d-46.87650155846302!3d-23.476838380147253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03aaf6d062af%3A0x2c22de58cd7f17f1!2sAlphaville%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP%2C%2006542-115!5e0!3m2!1spt-BR!2sbr!4v1743520541908!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <MiniForm />
      <Footer />
    </>
  )
}