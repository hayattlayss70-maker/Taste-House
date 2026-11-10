function Cart({
  cartItems,
  cart,
  changeQuantity,
  totalPrice,
  goToCheckout
}) {
  return (
    <section className="cart-section">
      <p className="subtitle">YOUR ORDER</p>
      <h2>MY <span>CART</span></h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">
          Your cart is empty. Add something delicious!
        </p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(food => (
              <div className="cart-item" key={food.id}>
                <img src={food.image} alt={food.name} />

                <div className="cart-item-info">
                  <h3>{food.name}</h3>
                  <p>${food.price.toFixed(2)} each</p>
                </div>

                <div className="quantity-controls">
                  <button onClick={() => changeQuantity(food.id, -1)}>
                    -
                  </button>

                  <span>{cart[food.id]}</span>

                  <button onClick={() => changeQuantity(food.id, 1)}>
                    +
                  </button>
                </div>

                <strong>
                  ${(food.price * cart[food.id]).toFixed(2)}
                </strong>

                <button
                  className="remove-btn"
                  onClick={() =>
                    changeQuantity(food.id, -cart[food.id])
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button onClick={goToCheckout}>
              Place Order
            </button>
          </div>
        </>
      )}
    </section>
  )
}

export default Cart;