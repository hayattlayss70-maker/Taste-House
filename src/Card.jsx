function Card({ image, title, price, description }) {
    return (
        <div>
            <img
                src={image}
                alt={title}
                width="200"
            />

            <h3>{title}</h3>
            <p>Price: {price}</p>
            <p>{description}</p>
        </div>
    );
}

export default Card;