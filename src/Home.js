import React from 'react';
import { Link, Route } from "react-router-dom"

export default function Home(props) {
  return (

    <div className="home-page">
      <header>
        <nav>
          <Link to="/">Home</Link>
          Help
        </nav>

        <div>
        <button id="order-pizza">PIZZA!!!</button>
          <Link to ="/pizza"></Link>
      </div>

      </header>
    </div>

  );
}