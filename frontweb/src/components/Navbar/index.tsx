import './styles.css'
import 'bootstrap/js/src/collapse.js'
import './'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md nav-main main-nav">
      <div className="container-fluid">
        <Link to="/" className="text-nav">
          <h1>Carros Top</h1>
        </Link>
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
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalogo" activeClassName="active">
                {' '}
                Catálogo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
