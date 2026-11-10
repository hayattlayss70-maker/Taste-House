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
    </section>
  )
}

export default Home
