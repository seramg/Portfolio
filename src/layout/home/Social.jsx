import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <nav className="home-side-nav">
      <ul className="ul-reset home-side-menu">
        <li className="list-item">
          <a href="#" className="link-item">
            <FaInstagram className="icon" />
          </a>
        </li>
        <li className="list-item">
          <a href="#" className="link-item">
            <FaGithub className="icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Social;
