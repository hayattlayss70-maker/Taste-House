import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="subtitle">WELCOME TO TASTE HOUSE</p>

        <h1>THE TASTE<br />YOU <span>LOVE.</span></h1>

        <p>
          Fresh ingredients, delicious meals and unforgettable
          flavors. Your favorite food is just one click away!
        </p>

        <Link to="/menu" className="order-btn">
          Explore Menu →
        </Link>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000"
          alt="Restaurant menu highlight"
        />
      </div>
    </section>
  )
}

export default Home
