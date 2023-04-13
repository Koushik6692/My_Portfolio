import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowUp,
  AiFillLinkedin,
} from "react-icons/ai";
import logo from "../assets/logo2.jpg";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="Founder" />

        <h2>Koushik</h2>
        <p>Believe it!🔥</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://instagram.com/koushik.09" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/koushik6692" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://linkedin.com/in/koushik6692" target={"blank"}>
            <AiFillLinkedin />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
