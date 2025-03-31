export default function MiniForm() {
  return (
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
  )
}