

import Header from './Header.jsx'
import CarouselSlide from './Carousel.jsx'
import IconeBook from './assets/images/iconebook.png'
import IconeBola from './assets/images/iconebola.png'
import IconeTrofeu from './assets/images/iconetrofeu.png'
import IconeBolaBranca from './assets/images/bola.png'
import IconeApoio from './assets/images/apoio.png'
import IconeProfessor from './assets/images/professor.png'

import './Home.css'
import './index.css'
function Home() {

  return (
    <>
      <Header />
      <CarouselSlide />
      <div className="container">

        <div id='inicio' className='card1 '>
          <h2 className='reveal'>Projeto Fênix de <br />Esporte, <br />Cultura <br />e Lazer</h2>
          <strong className='text-center'>Desde 2015</strong>
          <button className='botao-laranja'>SOBRE O PROJETO</button>
        </div>
        <section id="conquistas">
          <div>
            <h2>Eventos e<br />Conquistas da<br /> Equipe </h2>
            <p>Nos acompanhe!</p>
            <button className='botao-laranja'>FIQUE POR DENTRO!</button>
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
