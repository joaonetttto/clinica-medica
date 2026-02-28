import prof1 from "../assets/prof1.png";
import prof2 from "../assets/prof2.png";
import "./profissionais.css";

function Profissionais() {
  return (
    <section className="profissionais-section">
      <div className="profissionais-container">

        {/* ===================== */}
        {/* NOSSAS ESPECIALIDADES */}
        {/* ===================== */}

        <h2 className="especialidades-titulo">
          <span className="titulo-fino">Nossas </span>
          <span className="titulo-forte">especialidades</span>
        </h2>

        <div className="especialidades-cards">

          <div className="card">
            <h3>Psiquiatria Clínica do Adulto</h3>
            <p>
              Avaliação diagnóstica e tratamento medicamentoso com acompanhamento individualizado para transtornos ansiosos, pânico, burnout, TOC e insônia. Atendimento baseado em evidências, com escuta qualificada e foco na estabilização e qualidade de vida.
            </p>
            <button>Saiba mais</button>
          </div>

          <div className="card">
            <h3>Psicoterapia Psicanalítica</h3>
            <p>
              Atendimento psicoterapêutico com abordagem psicanalítica, voltado à compreensão profunda dos conflitos emocionais, padrões de comportamento e processos inconscientes. Indicado para adolescentes e adultos que buscam autoconhecimento e transformação duradoura.
            </p>
            <button>Saiba mais</button>
          </div>

          <div className="card">
            <h3>Saúde Mental Integrada</h3>
            <p>
              Integração entre acompanhamento psiquiátrico e psicoterapia, respeitando a singularidade de cada paciente e promovendo cuidado contínuo, ético e personalizado.
            </p>
            <button>Saiba mais</button>
          </div>

        </div>

        {/* ============================ */}
        {/* CONHEÇA NOSSOS PROFISSIONAIS */}
        {/* ============================ */}

        <h2 className="profissionais-titulo">
          <span className="titulo-fino">Conheça nossos </span>
          <span className="titulo-forte">profissionais</span>
        </h2>

        {/* Profissional 1 */}
        <div className="profissional-card">
          <div className="profissional-info">
            <h3 className="profissional-nome">
              Rogério Nogueira Coelho de Souza
            </h3>
            <p className="profissional-crm">CRM-SP 40437</p>
            <ul className="profissional-detalhes">
              <li>Médico formado pela Universidade Federal de São Paulo - UNIFESP (1980).</li>
              <li>Psiquiatra pela Comunidade Terapêutica Enfance (1982).</li>
              <li>Médico psiquiatra da Associação Pró-reintegração Social da Criança - Comunidade Terapêutica Enfance (1983 a 1985).</li>
              <li>Formação em Psicanálise no Instituto Sedes Sapientiae (1985 a 1988).</li>
              <li>Médico psiquiatra do Setor de Higiene Mental e Psiquiatria Infantil do Hospital Infantil Menino Jesus da PMSP (1986 a 1992).</li>
              <li>Membro Filiado à Sociedade Brasileira de Psicanálise de São Paulo (desde 1995).</li>
              <li>Graduação em Filosofia pela USP (1997).</li>
              <li>Professor do Centro de Psicanálise de Campinas (1985 a 2005).</li>
              <li>Psicanalista e membro fundador do Instituto Therapon Adolescência, ONG (1998 a 2004).</li>
              <li>Professor do Curso de Psicanálise para Formação de Psicoterapeutas do Departamento de Psiquiatria da UNIFESP (2009 a 2012).</li>
              <li>Atendimentos em Psicoterapia (abordagem psicanalítica) em consultório particular na Vila Mariana-SP ou via teleatendimento.</li>
            </ul>
          </div>
          <div className="profissional-foto">
            <img src={prof1} alt="Dr. Rogério Nogueira Coelho de Souza" />
          </div>
        </div>

        {/* Profissional 2 */}
        <div className="profissional-card">
          <div className="profissional-info">
            <h3 className="profissional-nome">
              Thais Costa Coelho de Souza
            </h3>
            <p className="profissional-crm">CRM-SP 209030 / RQE 124906</p>
            <ul className="profissional-detalhes">
              <li>Médica formada pela Universidade Estadual de Campinas/SP - UNICAMP (2014-2019).</li>
              <li>Psiquiatra pelo Instituto de Psiquiatria do Hospital das Clínicas da Universidade de São Paulo - IPq-HCFMUSP (2021-2024).</li>
              <li>Graduação em Economia pela Universidade de São Paulo - FEA USP (2007-2011).</li>
              <li>Business Program na FH Joanneum University of Applied Sciences - Áustria (2010).</li>
              <li>Atendimentos a pacientes adultos a partir de 18 anos em consultório particular na Vila Mariana-SP ou via telemedicina.</li>
              <li>Atendimentos em Psiquiatria Geral Adulto com foco em:</li>
              <li>Transtornos ansiosos</li>
              <li>Pânico</li>
              <li>Burnout</li>
              <li>Transtorno Obsessivo-Compulsivo</li>
              <li>Insônia</li>
            </ul>
          </div>
          <div className="profissional-foto">
            <img src={prof2} alt="Dra. Thais Costa Coelho de Souza" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Profissionais;