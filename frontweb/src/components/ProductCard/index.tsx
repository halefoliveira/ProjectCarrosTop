import CarImg from 'Assets/images/car-card.png'
import './styles.css'

const ProductCard = () => {
  return (
    <>
      <div className="card-car">
        <div className="base-card ">
          <div className="base-card catalago-image-container">
            <img src={CarImg} alt="imagem do card" className="card-img" />
          </div>
          <div className="text-card">
            <h1>Audi Supra TT</h1>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, nisi
            </h2>
          </div>
          <div className="btn-card">
            <button className="content-card">
              <p>COMPRAR</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
