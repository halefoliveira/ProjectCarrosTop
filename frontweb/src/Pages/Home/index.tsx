import Navbar from 'components/Navbar'
import './styles.css'
import ProductImg from 'Assets/images/car.png'
import ButtonIcon from 'components/buttonIcon'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h2>O carro perfeito para você</h2>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho.
            </p>
          </div>
          <div className="home-image-container">
            <img src={ProductImg} alt="Nome do produto" className="image-png" />
          </div>
        </div>
        <div className="catalago-container">
       
            <ButtonIcon />
            <div className="container-button-text">
              <h1>Comece agora a navegar</h1>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
