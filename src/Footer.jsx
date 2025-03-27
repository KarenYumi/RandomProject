export default function Footer() {
  return (
    <footer style={{backgroundColor: '#000000' }}>
      <div style={{
        borderTop: '2px solid #ffff', margin: '0 4rem'
      }}></div>
      <div className="footer">
        <div className='footer-links'>
          <div>
            <h1>Suporte</h1>
            <ul>
              <li>Termos e Condições</li>
              <li>Política de Privacidade</li>
              <li>Perguntas Frequentes</li>
            </ul>
          </div>
          <div>
            <h1>Contato</h1>
            <p>email@exemplo.com</p>
            <p>11 22232-2222</p>
          </div>
        </div>
        <div >
          <h1>Império</h1>
        </div>
      </div>
    </footer>
  )
}