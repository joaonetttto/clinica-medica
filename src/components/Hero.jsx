import foto from "../assets/foto-inicial.png"
import logo from "../assets/logo.png"
import planta1 from "../assets/planta1.png"
import planta2 from "../assets/planta2.png"
import planta3 from "../assets/planta3.png"

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <div className="hero-content">
            <img src={logo} alt="Logo da clínica" className="hero-logo" />
            <h1>
              <span className="titulo-fino">Atendimento médico</span>
              <br />
              <span className="titulo-forte">psiquiátrico e psicoterapia.</span>
            </h1>
            <p>
              Clínica planejada para atender pacientes com <br />
              conforto, privacidade e individualidade.
            </p>
            <button>Agende agora</button>
          </div>
        </div>

        <div className="hero-right">
          {/* Plantas decorativas */}
          <img src={planta1} alt="" className="planta planta-top-left" />
          <img src={planta2} alt="" className="planta planta-top-right" />
          <img src={planta3} alt="" className="planta planta-vertical" />

          {/* Foto principal */}
          <img src={foto} alt="Profissionais da clínica" className="foto-principal" />
        </div>
      </section>

      {/* WhatsApp flutuante */}
      <button 
  className="whatsapp-float"
  onClick={() => alert("Abriria WhatsApp")}
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="36" height="36" fill="white">
    <path d="M380.9 97.1C339-13 255.3-12.8 207.2 34.6c-48.1 47.4-48.8 130.6 0 178l-24 69.7c-3 8.6 7.2 16.4 15.7 12l70.6-29.7c47.7 28.7 106.6 17.5 144.4-25.4 35.7-41.4 40.4-102.8 12.4-147.5zM224 303.4c-36.9 0-67-29.9-67-66.8 0-36.9 30-66.9 67-66.9 36.9 0 66.9 30 66.9 66.9 0 36.9-30 66.8-66.9 66.8z"/>
  </svg>
</button>
    </>
  )
}

export default Hero