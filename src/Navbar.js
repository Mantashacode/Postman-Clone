import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="Postman_Logo2.png"
              alt=""
              className="d-inline-block align-text-top"
            />

            <div className="home">HOME</div>
            <div className="workspace">Workspaces</div>
            <div className="apinetwork">API Network</div>
            <div className="explore">Explore</div>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
