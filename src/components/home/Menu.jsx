import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/pizza1.jpg";
import burger2 from "../../assets/pizza2.jpg";
import burger3 from "../../assets/pizza3.jpg";

const Menu = () => {
  const addToCartHandler = (itemNum) => {};

  return (
    <section id="menu">
      <h1>MENU</h1>

      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title="Cheese Burger"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={500}
          title="Veg Cheese Burger"
          delay={0.5}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={1800}
          title="Cheese Burger with French Fries"
          delay={0.8}
          handler={addToCartHandler}
        />
        
      </div>
      <br/>
      <br/>
      <br/>
      <div>
      <MenuCard
          itemNum={4}
          burgerSrc={burger3}
          price={1800}
          title="Cheese Burger with French Fries"
          delay={1}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={5}
          burgerSrc={burger3}
          price={1800}
          title="Cheese Burger with French Fries"
          delay={1.2}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={6}
          burgerSrc={burger3}
          price={1800}
          title="Cheese Burger with French Fries"
          delay={1.3}
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
};

export default Menu;
