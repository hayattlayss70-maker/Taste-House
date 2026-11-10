function Menu({
  foods,
  categories,
  category,
  setCategory,
  addToCart,
  cartItems,
  cart,
  changeQuantity,
  totalPrice,
  totalItems,
  goToCheckout
}) {
  const filteredFoods = category === 'All'
    ? foods
    : foods.filter(food => food.category === category)

  return (
    <>
      <section className="menu" id="menu">
        <p className="subtitle">FRESH & DELICIOUS</p>
        <h2>OUR <span>MENU</span></h2>
        <p className="menu-intro">
          Discover your next favorite meal.
        </p>

        <div className="category-buttons">
          {categories.map(item => (
            <button
              key={item}
              className={category === item ? 'active' : ''}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="food-container">
          {filteredFoods.map(food => (
            <div className="food-card" key={food.id}>
              <img
                className="food-image"
                src={food.image}
                alt={food.name}
              />

              <div className="food-info">
                <span className="food-category">
                  {food.category}
                </span>

                <h3>{food.name}</h3>
                <p>{food.description}</p>

                <div className="food-bottom">
                  <h4>${food.price.toFixed(2)}</h4>
                  <button onClick={() => addToCart(food)}>
                    + Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cart-section" id="cart">
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
    </>
  )
}

export default Menu