import React from "react";
import { useState } from "react";

export default function RepetitionExercise() {
  let [reps, addRep] = useState(0);

  let resetRep = () => {
    addRep(0);
  };

  let repetitionExercises = [
    { name: "Push Ups" },
    { name: "Jumping Jacks" },
    { name: "Sit Ups" },
  ];

  let name = repetitionExercises.map((item) => <p>{item.name}</p>); //from lab 4

  return (
    <div>
      <p>{name}</p>
      <p>Reps: {reps}</p>
      <button onClick={() => addRep(reps + 1)}>Complete Rep</button>
      <button onClick={resetRep}>Reset</button>
      <button>Return</button>
    </div>
  );
}
