import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/pizza1.jpg";
import burger2 from "../../assets/pizza2.jpg";
import burger3 from "../../assets/pizza3.jpg";
import { motion } from "framer-motion";

const CartItem = ({ value, title, img, increment, decrement }) => (
    <motion.div
    
   initial={
    {
        x: "-100%",
        opacity: 0,
    }
   }
   whileInView={ {
    x: 0,
    opacity: 1,
  }}
    transition={{
      delay: 0.5,
    }} className="cartItem">
    <motion.div
    
   initial={
    {
        x: "-100%",
        opacity: 0,
    }
   }
   whileInView={ {
    x: 0,
    opacity: 1,
  }}
    transition={{
      delay: 0.6,
    }}>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </motion.div>

    <motion.div
    
   initial={
    {
        x: "-100%",
        opacity: 0,
    }
   }
   whileInView={ {
    x: 0,
    opacity: 1,
  }}
    transition={{
      delay: 0.9,
    }}>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </motion.div>
  </motion.div>
);

const Cart = () => {
  const increment = (item) => {};

  const decrement = (item) => {};

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Pizza"}
          img={burger1}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Veg Cheese Pizza"}
          img={burger2}
          value={0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Cheese Pizza with French Fries"}
          img={burger3}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
