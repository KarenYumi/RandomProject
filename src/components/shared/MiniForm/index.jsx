import { useState, useEffect } from "react"
import { ClipLoader } from "react-spinners";

export default function MiniForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //tira a mensagem de erro depois de 3 s
  useEffect(() => {
    let errorTimer;
    if (error) {
      errorTimer = setTimeout(() => {
        setError("");
      }, 3000);
    }
    return () => clearTimeout(errorTimer);
  }, [error]);

  //tira a mensagem de sucesso depois de 5 s
  useEffect(() => {
    let modalTimer;
    if (showModal) {
      modalTimer = setTimeout(() => {
        setShowModal(false);
      }, 5000);
    }
    return () => clearTimeout(modalTimer);
  }, [showModal]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  function handleSubmit() {
    if (!email) {
      setError("Por favor, insira um e-mail.");
      return;
    }
    if (!validateEmail(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowModal(true);
      setEmail('');
    }, 1500);
  };

  return (
    <div className='mini-form'>
      <div>
        <h1>FIQUE POR DENTRO</h1>
        <p>Cadastre-se e seja o primeiro a saber sobre novas aulas, comodidades e mais. Respeitamos sua privacidade e nunca compartilharemos suas informações com fornecedores externos.</p>
      </div>

      <div className="form-container">
        <div className="message-container">
          {error && <div className="error-message">{error}</div>}
          {showModal && <div className="success-message">Seu e-mail foi cadastrado com sucesso!</div>}
        </div>

        <div className="form-mini">
          <input
            type='text'
            placeholder='E-mail'
            value={email}
            onChange={handleEmailChange}
            className={error ? 'input-error' : ''}
          />
          <button
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loading-content">
                <ClipLoader size={14} color={"#ffffff"} loading={isLoading} />
                <span style={{ marginLeft: 10 }}>Carregando...</span>
              </div>
            ) : (
              'Cadastre-se'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}