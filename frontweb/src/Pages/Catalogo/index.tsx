import './styles.css'
import ProductCard from 'components/ProductCard'
import Search from 'components/Search'

const Catalogo = () => {
  return (
    <>
      <div className="content-catalogo">
        <div className="content-search">
          <Search />
        </div>
        <div className="group-card">
          <div className="card">
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-sm-6 col-lg-4 ">
                <ProductCard />
              </div>
              <div className="col-sm-6 col-lg-4 ">
                <ProductCard />
              </div>
              <div className="col-sm-6 col-lg-4 ">
                <ProductCard />
              </div>
              <div className="col-sm-6 col-lg-4 ">
                <ProductCard />
              </div>
              <div className="col-sm-6 col-lg-4 ">
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Catalogo
