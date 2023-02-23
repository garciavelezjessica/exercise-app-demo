import React from "react";
import { useState } from "react";

export default function Tasks() {
  let [taskList, setList] = useState([]);
  let [task, setTask] = useState("Enter text");

  let addToTaskList = () => {
    let taskArray = taskList;
    taskArray.push(task);
    setList(taskArray);
    setTask("");
  };

  return (
    <div>
      <br></br>
      <button>Return</button>
      <br></br>
      <br></br>
      <h1>Add a Task</h1>
      <input
        type="text"
        value={task}
        onChange={(item) => setTask(item.target.value)}
      />{" "}
      <button onClick={addToTaskList}>Add Task</button>&nbsp;
      <li>{taskList.length > 0 && taskList.map((item) => <li>{item}</li>)}</li>
    </div>
  );
}
