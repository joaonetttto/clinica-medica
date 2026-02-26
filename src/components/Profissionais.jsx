import plantaFundo2 from "../assets/planta2-secao.png";

import prof1 from "../assets/prof1.png";
import prof2 from "../assets/prof2.png";

function Profissionais() {
  return (
    <section className="profissionais-section">
      {/* Planta de fundo */}
      <img src={plantaFundo2} alt="" className="planta-fundo" />

      {/* Título da seção */}
      <h2 className="profissionais-titulo">Conheça nossos profissionais!</h2>

      {/* Profissional 1 */}
      <div className="profissional-card">
        <div className="profissional-info">
          <h3 className="profissional-nome">Dr. Nome Aqui</h3>
          <p className="profissional-crm">CRM 123456</p>
          <p className="profissional-detalhes">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="profissional-foto">
          <img src={prof1} alt="Dr. Nome Aqui" />
        </div>
      </div>

      {/* Profissional 2 */}
      <div className="profissional-card">
        <div className="profissional-info">
          <h3 className="profissional-nome">Dra. Nome Aqui</h3>
          <p className="profissional-crm">CRM 654321</p>
          <p className="profissional-detalhes">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="profissional-foto">
          <img src={prof2} alt="Dra. Nome Aqui" />
        </div>
      </div>
    </section>
  )
}

export default Profissionais;