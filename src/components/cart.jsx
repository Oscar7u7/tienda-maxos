// src/components/Cart.jsx
import React from 'react';

const Cart = ({ carrito, onSend, onClear }) => {
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);
  const mensaje = carrito.map((item, i) => `• ${item.nombre} - $${item.precio}`).join('%0A');
  const url = `https://wa.me/521XXXXXXXXXX?text=Hola, quiero comprar:%0A${mensaje}%0A%0ATotal: $${total}`;

  return (
    <div style={styles.cartContainer}>
      <h4 style={styles.title}>🛒 Mi carrito</h4>
      <ul style={styles.list}>
        {carrito.map((item, i) => (
          <li key={i} style={styles.item}>{item.nombre} - ${item.precio}</li>
        ))}
      </ul>
      <p style={styles.total}>Total: ${total}</p>
      <div style={styles.buttons}>
        <button onClick={() => window.open(url, '_blank')} style={styles.button}>Enviar mi pedido por WhatsApp 📲</button>
        <button onClick={onClear} style={styles.clearButton}>Vaciar carrito</button>
      </div>
    </div>
  );
};

const styles = {
  cartContainer: {
    position: 'absolute',
    top: 80,
    right: 20,
    width: '250px',
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    zIndex: 999,
  },
  title: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.2rem'
  },
  list: {
    padding: 0,
    listStyle: 'none',
    marginBottom: '1rem'
  },
  item: {
    marginBottom: '0.3rem'
  },
  total: {
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  button: {
    backgroundColor: '#25D366',
    color: 'white',
    border: 'none',
    padding: '0.5rem',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  clearButton: {
    backgroundColor: '#ccc',
    border: 'none',
    padding: '0.5rem',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default Cart;
