import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, filterTasks, searchTasks, sortTasks, updateTodo } from "../actions";
import { useState } from "react";
import './tasklist.css';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.filteredTasks); // Use filtered tasks
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [editTaskId, setEditTaskId] = useState(null); // Track which task is being edited
  const [updatedTask, setUpdatedTask] = useState(""); // Track the updated task text

  // Handle deleting a task
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  // Handle enabling task editing
  const handleUpdate = (id, text) => {
    setEditTaskId(id); // Set the task ID that is being edited
    setUpdatedTask(text); // Set the current task text to be updated
  };

  // Save the updated task text
  const saveUpdatedTask = (id) => {
    dispatch(updateTodo(id, { text: updatedTask })); // Dispatch update action
    setEditTaskId(null); // Reset edit state after saving
  };

  // Handle filtering tasks by status
  const handleFilter = (status) => {
    dispatch(filterTasks(status));
  };

  // Handle searching for tasks by title or description
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    dispatch(searchTasks(event.target.value));
  };

  // Handle sorting tasks by different criteria
  const handleSort = (criteria) => {
    dispatch(sortTasks(criteria));
  };

  return (
    <div className="tasklist">
      <div className="controls">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={handleSearch}
        />

        {/* Filter buttons */}
        <button onClick={() => handleFilter("completed")}>Completed</button>
        <button onClick={() => handleFilter("in-progress")}>In Progress</button>

        {/* Sort buttons */}
        <button onClick={() => handleSort("deadline")}>Sort by Deadline</button>
        <button onClick={() => handleSort("priority")}>Sort by Priority</button>
      </div>

      {/* Display task list */}
      <div className="display-tasks">
        <h3>Your tasks:</h3>
        <ul className="tasks">
          {tasks.map((task) => (
            <li className="task" key={task.id}>
              {/* Show editable input if task is being edited */}
              {editTaskId === task.id ? (
                <>
                  <input
                    type="text"
                    value={updatedTask}
                    onChange={(e) => setUpdatedTask(e.target.value)}
                  />
                  <button onClick={() => saveUpdatedTask(task.id)}>Save</button>
                </>
              ) : (
                <>
                  {/* Task details */}
                  {task.text}
                  <button onClick={() => handleUpdate(task.id, task.text)}>Edit</button>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;


