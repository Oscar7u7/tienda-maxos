import React, { useState } from 'react'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
 
const productos = [
  {
    nombre: 'Blusa Lunares ',
    precio: 220,
    imagen: '/images/blusablancapuntosnegros.JPG',
  },
  {
    nombre: 'Blusa Mickey ',
    precio: 220,
    imagen: '/images/blusamickeylicra.JPG',
  },
  {
    nombre: 'Blusa Animal Print ',
    precio: 250,
    imagen: '/images/blusaprint.JPG',
  },
  {
    nombre: 'Blusa Lunares Rosa ',
    precio: 220,
    imagen: '/images/blusarosapuntos.JPG',
  },
  {
    nombre: 'Bolso de Mano Azul',
    precio: 180,
    imagen: '/images/BolsoAzul.JPG',
  },
  {
    nombre: 'Cardigan ',
    precio: 300,
    imagen: '/images/cardigan.JPG',
  },
  {
    nombre: 'Chamarra Mezclilla ',
    precio: 320,
    imagen: '/images/chamarramezclilla.JPG',
  },
  {
    nombre: 'Bolso De Mano Grande Rose Girl',
    precio: 400,
    imagen: '/images/rosegirl.JPG',
  },
  {
    nombre: 'BVestido Primavera Azul ',
    precio: 250,
    imagen: '/images/vestidoprimaveraazul.JPG',
  }
]

const App = () => {
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto])
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  const enviarPorWhatsApp = () => {
    const mensaje = carrito.map(p => `• ${p.nombre} - $${p.precio}`).join('\n')
    const total = carrito.reduce((acc, item) => acc + item.precio, 0)
    const texto = `Hola, quiero pedir estos productos:\n\n${mensaje}\n\nTotal: $${total} MXN`

    const numero = '5215618679513' //
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`
    window.open(url, '_blank')
    vaciarCarrito()
  }

  return (
  <>
    <Header
      totalCarrito={carrito.length}
      carrito={carrito}
      onSend={enviarPorWhatsApp}
    />

    <main style={{ padding: '1rem 2rem' }}>
      <section id="inicio">
        <h2>¡Bienvenido a la tienda más chida de México!</h2>
        <p>Descubre nuestra colección de ropa, bolsos y juguetes únicos 💼🧸👗</p>
      </section>

      <section id="catalogo" style={{ marginTop: '2rem' }}>
        <div style={grid}>
          {productos.map((prod, index) => (
            <ProductCard
              key={index}
              producto={prod}
              onAddToCart={agregarAlCarrito}
            />
          ))}
        </div>
      </section>
      <section id="instagram" style={{ marginTop: '4rem' }}>
  <h3>Síguenos en Instagram</h3>
  <iframe
    src="https://www.instagram.com/eleganceboutique0596/embed"
    width="100%"
    height="400"
    style={{ border: 'none', overflow: 'hidden' }}
    scrolling="no"
    allowTransparency="true"
    allow="encrypted-media"
    title="Instagram"
  ></iframe>
</section>

      <section id="ofertas" style={{ marginTop: '5rem' }}>
        <h3>Ofertas próximamente...</h3>
      </section>

      <section id="contacto" style={{ marginTop: '5rem' }}>
        <h3>Contáctanos por WhatsApp 📲</h3>
        <p>Haz clic en el carrito 🛒 para enviarnos tu pedido</p>
      </section>
    </main>
  </>
)
}

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1.5rem',
  marginTop: '2rem',
  padding: '0.5rem',
};

export default App
