import { useState } from 'react'

function Checkout({ cartItems, totalPrice, onConfirm, onBack }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    onConfirm({
      name,
      phone,
      address
    })
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <p>Complete your order at Taste House!</p>

      <h2>Order Summary</h2>

      {cartItems.map(food => (
        <div key={food.id}>
          <p>
            {food.name} x {food.quantity} — $
            {(food.price * food.quantity).toFixed(2)}
          </p>
        </div>
      ))}

      <h2>Total: ${totalPrice.toFixed(2)}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer Name (demo)"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Phone (demo)"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
        />

        <textarea
          placeholder="Delivery Address (demo)"
          value={address}
          onChange={e => setAddress(e.target.value)}
          required
        />

        <button type="submit">Confirm Order</button>
      </form>

      <button onClick={onBack}>Back to Cart</button>
    </div>
  )
}

export default Checkout