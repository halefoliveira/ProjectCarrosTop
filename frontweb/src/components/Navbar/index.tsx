import './styles.css'

const Navbar = () => {
  return (
    <nav className="navbar nav-main">
      <div>
        <h4>Carros Top</h4>
        <div>
          <ul className = "main-menu">
            <li> Home</li>
            <li>Catálogo</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
