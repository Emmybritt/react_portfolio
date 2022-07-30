import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 71) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* Header */}
      <header className={navbar ? "main-header fixed-header" : "main-header"}>
        <nav className="container">
          <div className=" header-transparent">
            {/* Brand */}
            <NavLink to="/">
              <img
                className="navbar-brand"
                src="img/logo/logo-light.svg"
                alt="brand logo"
              />
            </NavLink>
            {/* / */}
            {/* Mobile Toggle */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleClick}
            >
              <div className={click ? "hamburger active" : "hamburger"}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            {/* / */}
            {/* Top Menu */}
            <div
              className={
                click
                  ? "mobile-menu navbar-collapse justify-content-end active"
                  : "mobile-menu navbar-collapse justify-content-end"
              }
            >
              <Link to="/" className="sidebar-logo">
                <img src="img/logo/logo-light.svg" alt="brand" />
              </Link>
              <Scrollspy
                className="anchor_nav navbar-nav ml-auto"
                items={["home", "about", "services", "work", "blog", "contact"]}
                currentClassName="current"
                offset={-71}
              >
                <li>
                  <a className="nav-link" href="#home" onClick={handleClick}>
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#about" onClick={handleClick}>
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    href="#services"
                    onClick={handleClick}
                  >
                    <span>Services</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#work" onClick={handleClick}>
                    <span>Portfolio</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#blog" onClick={handleClick}>
                    <span>Blog</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#contact" onClick={handleClick}>
                    <span>Contact</span>
                  </a>
                </li>
              </Scrollspy>
              <button
                className=" sidebar-bottom-closer"
                type="button"
                onClick={handleClick}
              >
                Close Sidebar
              </button>
            </div>
            {/* / */}
          </div>
          {/* Container */}
        </nav>
        {/* Navbar */}
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
