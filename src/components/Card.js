import { BsFillBagFill } from "react-icons/bs";
import { CartState } from "../context/Context";

const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
  const { state : { cart }, dispatch } = CartState();
  const handleClick = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        img, title, star, reviews, newPrice, prevPrice
      }
    })
  }

  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
          <section className="btn-ctr">
            <button onClick={handleClick} className="btn">Add to Cart</button>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;