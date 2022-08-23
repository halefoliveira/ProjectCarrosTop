import './styles.css'
import 'bootstrap/js/src/collapse.js';
import './'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md nav-main main-nav">
      <div className="container-fluid">
        <a href="link" className="text-nav">
          <h1>Carros Top</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#carrostop-navbar"
          aria-controls="carrostop-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="carrostop-navbar">
          <ul className="navbar-nav offset-md-8 main-menu">
            <li>
              <a href="Link" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="Link"> Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
