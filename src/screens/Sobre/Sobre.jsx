import Header from '../../components/Header/Header.jsx'
import Carousel from '../../components/Carousel/Carousel.jsx'
import AmizadeFoto from '../../assets/images/time.jpg'

const imagesCarousel = [
    {
        src: AmizadeFoto
    }
]

function Sobre (){

return(
<>
<Header />
<Carousel items={imagesCarousel} />
</>

)

}
export default Sobre