import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./Data";
import "./App.css";

export default function App() {
  console.log("data",data);
  const cards = data.map((item) => {
    return <Card 
      img={item.coverImg}
      title={item.title}
      price={item.price}
      location={item.location}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
    />
  })
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
      {cards}
      </section>
    </>
  )
}