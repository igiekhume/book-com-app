export const addTodo = (text) => {
  return {
    type: "ADD_TASK",
    payload: {
      id: new Date().getTime(),
      text: text,
      status: "in-progress",
      deadline: null, // Placeholder for deadline
      priority: "medium", // Placeholder for priority
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TASK",
    payload: id,
  };
};

export const updateTodo = (id, updatedTask) => {
  return {
    type: "UPDATE_TASK",
    payload: { id, updatedTask },
  };
};

export const filterTasks = (status) => {
  return {
    type: "FILTER_TASKS",
    payload: status,
  };
};

export const searchTasks = (query) => {
  return {
    type: "SEARCH_TASKS",
    payload: query,
  };
};

export const sortTasks = (criteria) => {
  return {
    type: "SORT_TASKS",
    payload: criteria,
  };
};

  