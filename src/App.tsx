import { useState } from "react";

function App() {
  const [screen, setScreen] = useState("home");

  if (screen === "deposit") {
    return (
      <main>
        <h1>Deposit</h
