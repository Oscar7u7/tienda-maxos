import React from 'react'
import './ProductCard.css';

const ProductCard = ({ producto, onAddToCart }) => {
  return (
    <div style={styles.card} className="product-card">
      <img src={producto.imagen} alt={producto.nombre} style={styles.image} />
      <h3 style={styles.title}>{producto.nombre}</h3>
      <p style={styles.price}>${producto.precio} MXN</p>
      <button onClick={() => onAddToCart(producto)} style={styles.button}>
        Agregar al carrito
      </button>
    </div>
  )
}

const styles = {
card: {
  maxWidth: '250px',
  width: '100%',
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '1rem',
  textAlign: 'center',
  backgroundColor: '#fff',
  boxShadow: '0 0 10px rgba(0,0,0,0.05)',
  margin: '0 auto',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
},
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '6px',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '1.1rem',
    margin: '0.5rem 0 0.2rem',
  },
  price: {
    fontWeight: 'bold',
    marginBottom: '0.8rem',
    color: '#2c2c2c',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
}

export default ProductCard
