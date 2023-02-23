import "./App.css";
import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import WeightsExercise from "./components/WeightsExercise";
import Tasks from "./components/Tasks";

function App() {
  let [screen, changeScreen] = useState("home");

  if (screen === "home") {
    return (
      <div className="App">
        <div>
          <h1>
            <br></br>
            <b>Go do something!</b>
          </h1>
          <br></br>
          <p>Select an Exercise:</p>
          <br></br>
          <button>
            <img
              src="https://media1.popsugar-assets.com/files/thumbor/ArsvymzjafH53GPfbjjcCcB3PxI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/10/31/677/n/1922729/f5a12f7fbcd52af8_Basic-Push-Up.jpg"
              alt="push ups"
              onClick={() => changeScreen("repetition")}
            />
            <br></br>Push Ups
          </button>
          &emsp;
          <button>
            <img
              src="https://thumbs.dreamstime.com/z/woman-doing-jumping-jack-exercise-warm-up-woman-doing-jumping-jack-exercise-warm-up-workout-sport-training-fitness-girl-153890431.jpg"
              alt="jumping jacks img"
              onClick={() => changeScreen("repetition")}
            />
            <br></br>
            Jumping Jacks
          </button>
          <br></br>
          <br></br>
          <button>
            <img
              src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/Runner-training-on-running-track-1296x728-header-1296x728.jpg?w=1155&h=1528"
              alt="running img"
              onClick={() => changeScreen("duration")}
            />
            <br></br>
            Running
          </button>
          &emsp;
          <button>
            <img
              src="https://gethealthyu.com/wp-content/uploads/2014/08/Full-Sit-Up_Exercise.jpg"
              alt="sit ups img"
              onClick={() => changeScreen("repetition")}
            />
            <br></br>
            Sit Ups
          </button>
          <br></br>
          <p>New Components for Lab 6: </p>
          <button class = "customizedButton">
            <img
              src="https://www.mensjournal.com/wp-content/uploads/mf/_main_liftlift.jpg?quality=86&strip=all"
              alt="weight lifting img"
              onClick={() => changeScreen("weights")}
            />
            <br></br>
            Weights
          </button>
          &ensp;
          <button class = "customizedButton">
            <img
              src="https://www.shutterstock.com/image-vector/clipboard-checklist-task-icon-trendy-260nw-1348647950.jpg"
              alt="task img"
              onClick={() => changeScreen("tasks")}
            />
            <br></br>
            Create a Task
          </button>
          <br></br><br></br>
        </div>
      </div>
    );
  }

  if (screen === "repetition") {
    return (
      <div className="App">
        <div>
          <RepetitionExercise></RepetitionExercise>
        </div>
      </div>
    );
  }

  if (screen === "duration") {
    return (
      <div className="App">
        <div>
          <DurationExercise></DurationExercise>
        </div>
      </div>
    );
  }

  if (screen === "weights") {
    return (
      <div className="App">
        <div>
          <WeightsExercise></WeightsExercise>
        </div>
      </div>
    );
  }

  if (screen === "tasks") {
    return (
      <div className="App">
        <div>
          <Tasks></Tasks>
        </div>
      </div>
    );
  }
    
  }

export default App;
