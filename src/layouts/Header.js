import { useEffect } from "react";
import { scroll_, stickyNav } from "../utilits";

const Header = ({ dark }) => {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scroll_);
  });
  return (
    <div className="aali_tm_header">
      <div className="container">
        <div className="inner">
          {dark ? (
            <div className="logo">
              <a href="#">
                <img src="img/logo/MZ.png" alt="" />
              </a>
            </div>
          ) : (
            <div className="logo">
              <a className="light" href="#">
                <img src="img/logo/MZ.png" alt="aali image" />
              </a>
              <a className="dark" href="#">
                <img src="img/logo/MZ3.png" alt="aali image" />
              </a>
            </div>
          )}

          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Mon expérience</a>
              </li>
              <li>
                <a href="#resume">Éducation</a>
              </li>
              <li>
                <a href="#portfolio">Résume</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
