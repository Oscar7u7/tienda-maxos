import { useState } from 'react'
import './Header.css'
import logo from '../assets/logo.png';

const Header = ({ totalCarrito, carrito, onSend }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
<div style={{
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  height: '60px'
}}>
  <img
    src={logo}
    alt="Élégance Boutique"
    style={{
      height: '50px',
      width: '50px',
      objectFit: 'contain',
      borderRadius: '8px',
    }}
  />
  <span style={{
    fontFamily: 'Georgia, serif',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#222',
    whiteSpace: 'nowrap',
    lineHeight: '1'
  }}>
    ÉLÉGANCE BOUTIQUE
  </span>
</div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
  <a href="/" onClick={() => setMenuOpen(false)}>Inicio</a>
  <a
  href="/catalogo.pdf"
  download
  onClick={() => setMenuOpen(false)}
>
  Catálogo
</a>
  <a href="#ofertas" onClick={() => setMenuOpen(false)}>Ofertas</a>
  <a href="#instagram" onClick={() => setMenuOpen(false)}>Contacto</a>
</nav>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      <div className="cart-icon" onClick={onSend}>
        🛒
        {totalCarrito > 0 && <span className="cart-badge">{totalCarrito}</span>}
      </div>
    </header>
  )
}

export default Header