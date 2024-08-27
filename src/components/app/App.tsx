import React from "react";
import styles from "./app.module.css";
import { AllGoods } from "../allGoods/allGoods";
import { Routes, Route } from "react-router-dom";
import { FullCard } from "../fullCard/fullCard";

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<AllGoods />} />
        <Route path="/item/:id" element={<FullCard />} />
      </Routes>
    </div>
  );
}

export default App;
