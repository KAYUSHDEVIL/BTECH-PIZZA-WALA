import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.jpg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <br />
        <h1>AYUSH KUMAR</h1>

        <p>
          Hey, Everyone I am Ayush Kumar, the founder of MBA Pizza Wala.
          <br />
          Our Aim Is To Create The Most Tasty Pizza On Planet.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
