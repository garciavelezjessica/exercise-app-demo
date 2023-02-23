import React from "react";
import { useCallback, useEffect, useState } from "react";

//timer function is from instructor video and with their permission (Murray)

export default function WeightsExercise() {

  let [rep, addRep] = useState(0);
  let [message, addMessage] = useState("");
  let [vid, showVid] = useState(false);
  let [photo, showPhoto] = useState(false);

  const sStyle = {color: "green"};
  const cStyle = {color: "red"};


  if(message === "saved")
  {
    message = <p style = {sStyle}>Workout has been saved!</p>
  }

  if(message === "cancel")
  {
    message = <p 
    style = {cStyle}>Workout cancelled.
    </p>

  }

  if (vid === true) {
    vid = (
      <div>
        <iframe
          src="https://www.youtube.com/watch?v=t4A2o4Ycudw&ab_channel=getfitover40"
          title="YouTube video"
          allowfullscreen
        ></iframe>
        <br></br>
        <button onClick={() => showVid(false)}>Hide video</button><br></br><br></br>
      </div>
    );
  }

  if (photo === true) {
    photo = (
      <div>
        <img
          src="https://content.artofmanliness.com/uploads/2013/02/Overhead-Press-1.jpg"
          alt="weight lifting img"
          id = "weight-img"
        />
        <br></br>
        <button onClick={() => showPhoto(false)}>Hide photo</button><br></br><br></br>
      </div>
    );
  }

  let weightsExercises = [{ name: "Weights"}];

  let name = weightsExercises.map((item) => <p>{item.name}</p>);

  let inc = () =>
  {
    addRep(rep + 1);
  }

  let dec = () =>
  {
    addRep(rep - 1);
  }

  let currentTimer = 0;
  let [running, setRunning] = useState(false);
  let [timer, setTimer] = useState(0);
  let updateTimer = useCallback(() => {
    if (running) {
      setTimer((timer) => timer + 10);
    }
  }, [running]);

  useEffect(() => {
    currentTimer = setInterval(updateTimer, 10);
    return () => clearInterval(currentTimer);
  }, [running]);
  let startStop = useCallback(() => {
    setRunning(!running);
    clearInterval(currentTimer);
  }, [running]);
  let reset = useCallback(() => {
    setTimer(0);
  });
  let mins = Math.floor((timer / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
  let secs = Math.floor((timer / 1000) % 60)
    .toString()
    .padStart(2, "0");
  let mills = (timer % 1000).toString().padStart(2, "0");

  return (
    <div>
      <h1>
        <button>Return to Home</button>
      </h1>
      <h1>{name}</h1>
      <button class="custom" onClick={() => showVid(true)}>
        Click here to view video tutorial
      </button>
      <br></br>
      <br></br>
      {vid}
      <button class="custom" onClick={() => showPhoto(true)}>
        Click here to view photo tutorial
      </button>
      <br></br>
      <br></br>
      {photo}
      <br></br>
      <button onClick={startStop}>{running ? "Pause" : "Start"}</button>
      <button onClick={reset}>Reset</button>
      <p>
        Timer: {mins}:{secs}:{mills}
        <br></br>
        <br></br>
        <p>
          Weights (lbs): <input type="text"></input>
        </p>
        <p>
          Weights (kgs): <input type="text"></input>
        </p>
      </p>
      <br></br>
      <br></br>
      <p>Reps Completed</p>
      <button onClick={dec}>-</button> {rep} <button onClick={inc}>+</button>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={() => addMessage("saved")}>Save Workout</button>
      <br></br>
      <br></br>
      <button onClick={() => addMessage("cancel")}>Cancel Workout</button>
      <br></br>
      <br></br>
      <p>{message}</p>
      <br></br>
      <button>View Saved Videos</button>
    </div>
  );
}
