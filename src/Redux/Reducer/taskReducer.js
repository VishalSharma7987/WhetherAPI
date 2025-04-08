const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [], 
    weather: {},
    auth: { isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false }
  };
  
  
  export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload)
        };
      case 'SET_TASKS':
        return {
          ...state,
          tasks: action.payload
        };
      case 'SET_WEATHER':
        return {
          ...state,
          weather: action.payload
        };
      case 'SET_AUTH':
        return {
          ...state,
          auth: { isAuthenticated: action.payload }
        };
      default:
        return state;
    }
  };
  