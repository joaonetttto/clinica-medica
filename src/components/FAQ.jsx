import "./faq.css";
import { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const perguntas = [
    "São aceitos convênios médicos?",
    "Há retorno gratuito da consulta?",
    "Quanto tempo duram as consultas/atendimentos?",
    "Com que frequência são realizados os atendimentos?",
    "Quais as formas de pagamento?",
    "Preciso ir buscar a receita no consultório após a consulta online?",
    "Como faço para agendar?"
  ];

  const respostaFrequencia = `
    A frequência dos atendimentos depende do tipo de abordagem e da gravidade do quadro.
    Geralmente as sessões de psicoterapia são semanais (1–2x por semana).
    Já as consultas clínicas psiquiátricas podem variar de semanais a trimestrais,
    conforme o paciente estabiliza.
  `;

  return (
    <section className="faq-section">
      <div className="faq-container">

        <h2 className="faq-titulo">
          <span className="titulo-fino">Perguntas</span>
          <span className="titulo-forte"> frequentes</span>
        </h2>

        {perguntas.map((pergunta, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <button
              className="faq-pergunta"
              onClick={() => toggleFAQ(index)}
            >
              {pergunta}
              <span className="faq-icon">›</span>
            </button>

            <div className="faq-resposta">
              {index === 3 && <p>{respostaFrequencia}</p>}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default FAQ;