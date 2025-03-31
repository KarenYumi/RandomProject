import Footer from "./Footer";
import Header from "./Header";

export default function Contact() {
  return (
    <>
      <Header />
      <div>
        <div>
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
          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.464815169482!2d-46.7086293253901!3d-23.551743961237573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57ca4e787a57%3A0x935d486dea0766f5!2sAv.%20Di%C3%B3genes%20Ribeiro%20de%20Lima%2C%20471-401%20-%20Alto%20de%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005458-000!5e0!3m2!1spt-BR!2sbr!4v1743453809533!5m2!1spt-BR!2sbr" 
             allowfullscreen="" z='17' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}