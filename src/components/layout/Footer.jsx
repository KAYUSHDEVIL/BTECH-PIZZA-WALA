import React from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>MBA  Bigpizza Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @mbaPizzawala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://www.linkedin.com/in/ayush-kumar-775919292">
          <AiFillLinkedin />
        </a>
        <a href="https://www.instagram.com/kayush5069">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/KAYUSHDEVIL">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
