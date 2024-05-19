import '../Home/Home.css'
import '../../index.css'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header.jsx'
import CarouselSlide from '../../components/Carousel/Carousel.jsx'
import IconeBook from '../../assets/images/iconebook.png'
import IconeBola from '../../assets/images/iconebola.png'
import IconeTrofeu from '../../assets/images/iconetrofeu.png'
import IconeBolaBranca from '../../assets/images/bola.png'
import IconeApoio from '../../assets/images/apoio.png'
import IconeProfessor from '../../assets/images/professor.png'
import AmizadeFoto from '../../assets/images/time.jpg'
const itms = [
  {
    src: AmizadeFoto
  }
]
function Home() {

  return (
    <>
      <Header />
      <CarouselSlide items={itms} />
      <div className="container">

        <div id='inicio' className='card1'>
          <h2>Projeto Fênix de <br />Esporte, <br />Cultura <br />e Lazer</h2>
          <strong className='text-center'>Desde 2015</strong>
          <Link className='botão-laranja_quadrado' to={'/sobre'}>SOBRE O PROJETO</Link>
        </div>

        <section id="conquistas">
          <div>
            <h2>Eventos e<br />Conquistas da<br /> Equipe </h2>
            <p>Nos acompanhe!</p>
            <Link to={'/sobre'}><button className='botão-laranja_quadrado'>FIQUE POR DENTRO!</button></Link>
          </div>
        </section>

        <section id='conteudo'>
          <div>
            <h2>Conteúdo Didático</h2>
            <h3>Aprenda, Pratique, Conquiste!</h3>
            <div>
              <img src={IconeBook} />
              <img src={IconeBola} />
              <img src={IconeTrofeu} />
            </div>
            <div className='w-100'>
              <button className='botão-laranja_quadrado'>LEIA MAIS!</button>
            </div>
          </div>

        </section>
      </div>
      <section id='apoia-se' >
        <div className='container'>
          <h2>Faça Parte!</h2>
          <h3>Seja um Aluno, Professor ou Apoiador</h3>
          <div className='apoia-se_icons'>
            <img src={IconeBolaBranca} />
            <img src={IconeProfessor} />
            <img src={IconeApoio} />

          </div>
          <p>Saiba como participar ou apoiar o Projeto Fênix</p>
          <button className='botão-laranja_quadrado '>SAIBA MAIS!</button>
        </div>
      </section>


    </>
  )
}

export default Home
