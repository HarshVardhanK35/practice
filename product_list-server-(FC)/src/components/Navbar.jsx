import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../App.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
