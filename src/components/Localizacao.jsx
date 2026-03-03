import "./Localizacao.css";
import clinicaImg from "../assets/clinica.png";
function Localizacao() {
  return (
    <section className="localizacao-section">
      <div className="localizacao-container">

        <div className="localizacao-texto">
          <h2>
            Nossa <span>localização</span>
          </h2>

          <p>
            A Clínica está localizada na Rua Dr. Amâncio de Carvalho,
            182, conjunto 305 - Vila Mariana, São Paulo-SP.
          </p>

          <p>
            Telefone / Whatsapp (11) 99971-6789 <br />
            Email: cmpcoelhodesouza@gmail.com
          </p>

          <button className="btn-agendar">
            Agende agora!
          </button>
        </div>

        <div className="localizacao-imagem">
<img
  src={clinicaImg}
  alt="Foto da clínica"
/>        </div>

      </div>

      <div className="localizacao-mapa">
        <iframe
          src="https://www.google.com/maps?q=Rua+Dr.+Amâncio+de+Carvalho,+182,+São+Paulo&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="localizacao-footer">
        <p>Todos os direitos reservados © Coelho de Souza</p>
        <p>Política de privacidade</p>
      </div>

    </section>
  );
}

export default Localizacao;