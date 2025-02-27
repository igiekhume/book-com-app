import {useRef} from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
import './task.css'

const Task = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const addNewTask = () => {
    const task = inputRef.current.value.trim();
    if (task !== "") {
      dispatch(addTodo(task));
      inputRef.current.value = "";
    }
  };

  return (
    <div className="task-component">
      <div className="add-task">
        <input
          type="text"
          placeholder="Add task here..."
          ref={inputRef}
          className="taskInput"
        />
        <button onClick={addNewTask}>Add task</button>
      </div>
    </div>
  );
};

export default Task;
