import React from "react";
import logo from "./assets/logo.png";

const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brands" href="/">
          <div className="d-flex">
            <img
              className="mr-2"
              src={logo}
              alt="logo"
              style={{ height: "4rem", padding: "0.5rem" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#333",
                fontWeight: "bolder",
                fontSize : "1.5rem",
                textTransform: "uppercase"
              }}
            >
              OptiManager
            </div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
