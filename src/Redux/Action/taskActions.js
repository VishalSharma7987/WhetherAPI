import axios from 'axios';

export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: id
});

export const setTasks = (tasks) => ({
  type: 'SET_TASKS',
  payload: tasks
});

export const fetchWeather = (city) => {
  return async (dispatch) => {
    try {
        const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
        console.log("API Key:", apiKey); 

      if (!apiKey) {
        throw new Error("API key is missing. Please check the .env file.");
      }
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      dispatch({
        type: 'SET_WEATHER',
        payload: response.data
      });
    } catch (error) {
      console.error("Weather API Error: ", error);
    }
  };
};
