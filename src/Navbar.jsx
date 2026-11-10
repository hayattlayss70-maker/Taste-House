import { Link } from 'react-router-dom'

function Navbar({ totalItems }) {
  return (
    <nav className="navbar">
      <h2>TASTE<span>HOUSE.</span></h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

    <Link to="/cart" className="cart-btn">
        🛒 Cart ({totalItems})
      </Link>
    </nav>
  )
}

export default Navbar