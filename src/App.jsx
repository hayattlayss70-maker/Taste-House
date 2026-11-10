import { useState } from 'react'
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import Menu from './Menu.jsx'
import Cart from './Cart.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Checkout from './Checkout.jsx'
import Confirmation from './Confirmation.jsx'

const foods = [
  { id: 1, name: 'Classic Burger', category: 'Burgers', price: 8, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600', description: 'Juicy beef, fresh lettuce and melted cheese.' },
  { id: 2, name: 'Chicken Nuggets', category: 'Sides', price: 7, image: 'https://images.pexels.com/photos/36863577/pexels-photo-36863577.jpeg', description: 'Crispy golden chicken nuggets served with dipping sauce.' },
  { id: 3, name: 'Italian Pizza', category: 'Pizza', price: 12, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600', description: 'Mozzarella cheese and fresh tomato sauce.' },
  { id: 4, name: 'Chicken Sandwich', category: 'Sandwiches', price: 9, image: 'https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/728420/PRODUCT/275cb30b-7994-4b25-bff5-af73b044ba61.jpg', description: 'Crispy fried chicken with fresh lettuce and special sauce.' },
  { id: 5, name: 'French Fries', category: 'Sides', price: 4, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600', description: 'Golden and crispy french fries.' },
  { id: 6, name: 'Chicken Tenders', category: 'Food', price: 7, image: 'https://images.unsplash.com/photo-1562967914-608f82629710', description: 'Crispy golden chicken tenders served fresh.' },
  { id: 7, name: 'Mozzarella Sticks', category: 'Food', price: 6, image: 'https://images.pexels.com/photos/37279725/pexels-photo-37279725.jpeg', description: 'Crispy mozzarella sticks with melted cheese inside.' }
]

function App() {
  const navigate = useNavigate()

  const [category, setCategory] = useState('All')
  const [cart, setCart] = useState({})
  const [lastOrder, setLastOrder] = useState(null)

  const addToCart = (food) => {
    setCart(prev => ({
      ...prev,
      [food.id]: (prev[food.id] || 0) + 1
    }))
  }

  const changeQuantity = (id, amount) => {
    setCart(prev => {
      const newQuantity = (prev[id] || 0) + amount
      const updated = { ...prev }

      if (newQuantity <= 0) {
        delete updated[id]
      } else {
        updated[id] = newQuantity
      }

      return updated
    })
  }

  const cartItems = foods.filter(food => cart[food.id] > 0)

  const checkoutItems = cartItems.map(food => ({
    ...food,
    quantity: cart[food.id]
  }))

  const totalItems = Object.values(cart).reduce(
    (sum, quantity) => sum + quantity, 0
  )

  const totalPrice = cartItems.reduce(
    (sum, food) => sum + food.price * cart[food.id], 0
  )

  const goToCheckout = () => {
    if (cartItems.length === 0) return
    navigate('/checkout')
  }

  const confirmOrder = (customer) => {
    setLastOrder({
      items: checkoutItems,
      total: totalPrice,
      customer
    })

    setCart({})
    navigate('/confirmation')
  }

  const orderMore = () => {
    setLastOrder(null)
    navigate('/')
  }

  const categories = [
    'All', 'Burgers', 'Pizza', 'Sandwiches',
    'Sides', 'Drinks', 'Desserts', 'Food'
  ]

  return (
    <div className="app">

      <Navbar totalItems={totalItems} />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/menu"
          element={
            <Menu
              foods={foods}
              categories={categories}
              category={category}
              setCategory={setCategory}
              addToCart={addToCart}
              cartItems={cartItems}
              cart={cart}
              changeQuantity={changeQuantity}
              totalPrice={totalPrice}
              totalItems={totalItems}
              goToCheckout={goToCheckout}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              cart={cart}
              changeQuantity={changeQuantity}
              totalPrice={totalPrice}
              goToCheckout={goToCheckout}
            />
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/checkout"
          element={
            <Checkout
              cartItems={checkoutItems}
              totalPrice={totalPrice}
              onConfirm={confirmOrder}
              onBack={() => navigate('/cart')}
            />
          }
        />

        <Route
          path="/confirmation"
          element={
            lastOrder ? (
              <Confirmation
                order={lastOrder}
                onOrderMore={orderMore}
              />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>

    </div>
  )
}

export default App