import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion])

  useEffect(() => {
    console.log(`It's ${secondary} around here!`)
  }, [secondary])

  return (
    <>
      <h1>Current emotion is {emotion} and {secondary}</h1>
      <button onClick={() => setEmotion("Stoked")}>
        Make Stoke
      </button>
      <button onClick={() => setEmotion("crabby")}>
        Make Crabby
      </button>
      <button onClick={() => setEmotion("Frustrated")}>
        Frustrate
      </button>
      <button onClick={() => setEmotion("Enthusiastic")}>
        Enthuse
      </button>
    </>
  );

  }

export default App;
