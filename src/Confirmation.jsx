function Confirmation({ order, onOrderMore }) {
  return (
    <div className="confirmation-page">
      <div className="confirmation-card">
        <h1>🎉 ORDER CONFIRMED!</h1>

        <h2>Thank you, {order.customer.name}!</h2>

        <p>Your order has been successfully placed.</p>

        <h3>Order Details</h3>

        {order.items.map(food => (
          <div className="confirmation-item" key={food.id}>
            <img src={food.image} alt={food.name} />

            <div>
              <h4>{food.name}</h4>
              <p>Quantity: {food.quantity}</p>
            </div>

            <strong>
              ${(food.price * food.quantity).toFixed(2)}
            </strong>
          </div>
        ))}

        <h2>Total: ${order.total.toFixed(2)}</h2>

        <div className="customer-details">
          <h3>Customer Details</h3>
          <p><strong>Name:</strong> {order.customer.name}</p>
          <p><strong>Phone:</strong> {order.customer.phone}</p>
          <p><strong>Delivery Address:</strong> {order.customer.address}</p>
        </div>

        <button onClick={onOrderMore}>
          Order More
        </button>
      </div>
    </div>
  )
}

export default Confirmation