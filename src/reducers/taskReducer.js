const initialState = {
  tasks: [],
  filteredTasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "FILTER_TASKS":
      return {
        ...state,
        filteredTasks: state.tasks.filter(
          (task) => task.status === action.payload
        ),
      };
      case "UPDATE_TASK":
  return {
    ...state,
    tasks: state.tasks.map((task) =>
      task.id === action.payload.id ? { ...task, ...action.payload.updatedTask } : task
    ),
  };
    case "SEARCH_TASKS":
      return {
        ...state,
        filteredTasks: state.tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(action.payload.toLowerCase()) ||
            task.description.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case "SORT_TASKS":
      return {
        ...state,
        filteredTasks: [...state.tasks].sort((a, b) => {
          if (action.payload === "deadline") {
            return new Date(a.deadline) - new Date(b.deadline);
          } else if (action.payload === "priority") {
            return a.priority - b.priority;
          }
          return 0;
        }),
      };
    default:
      return state;
  }
};

export default taskReducer;




  