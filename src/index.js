import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import olympusData from "./olympusData";

function App() {
  return (
    <div>
      <TitleSection />
      <CardGrid />
    </div>
  );
}

function TitleSection() {
  return (
    <div>
      <h1>The Twelve Olympians</h1>
      <h2>
        Meet the twelve Olympian gods of ancient Greek mythology through short
        introductions and interesting facts about each deity.
      </h2>
    </div>
  );
}

function CardGrid() {
  return (
    <div className="gods-grid">
      {olympusData.map((god) => (
        <Card
          image={god.image}
          name={god.godName}
          position={god.position}
          description={god.description}
        />
      ))}
    </div>
  );
}

function Card({ image, name, position, description }) {
  return (
    <div className="god-card">
      <img className="god-image" src={image} alt={name}></img>
      <div className="god-content">
        <p className="god-name">{name}</p>
        <p className="god-position">{position}</p>
        <p className="god-description">{description}</p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
