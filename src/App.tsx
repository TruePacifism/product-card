import React from "react";
import logo from "./logo.svg";
import "./App.css";
import headphonesPicture from "./assets/headphones.jpg";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <ProductCard
        title="Наушники"
        origin="Китай"
        price={34900}
        currency="RUB"
        imageUrl={headphonesPicture}
      />
    </div>
  );
}

export default App;
