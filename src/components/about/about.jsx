import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import me from "../../assets/founder.jpg";
import { motion } from "framer-motion";

const About = () => {
  const options = {
    initial: {
      x: "+100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
    
  };
  return (
    <section className="about">
      <main>
        <motion.h1 {...options}
            transition={{
              delay: 0.3,
            }}
        >About Us
        </motion.h1>

        <motion.article {...options}
        transition={{
          delay: 0.5,
        }}>
          <h4>MBA Pizza Wala</h4>
          <p>
            We are MBA Pizza Wala. The place for most tasty Pizza's on the
            enitre earth.
          </p>

          <p>
            Explore the various type of food and Pizza. Click below to see the
            menu
          </p>

          <Link to="/">
            <AiFillHome />
          </Link>
        </motion.article>

        <motion.div
        {...options}
        transition={{
          delay: 0.8,
        }}>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Ayush Kumar</h3>
            </div>

            <p>
              I am Ayush Kumar, the founder of MBA Pizza Wala. Affiliated to
              God Taste...
            </p>
          </article>
        </motion.div>
      </main>
    </section>
  );
};

export default About;
