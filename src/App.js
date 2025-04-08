import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, fetchWeather } from './Redux/Action/taskActions';
import TaskInput from './Componenets/taskinput';
import TaskList from './Componenets/tastklist';
import Login from './Componenets/login.js';
import { Box, Typography, Paper, Button } from '@mui/material';
import SunIcon from '@mui/icons-material/WbSunny';



function App() {
  const dispatch = useDispatch();
  const { tasks, weather } = useSelector(state => state.tasks);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
 
  
  useEffect(() => {
    dispatch(fetchWeather('New York')); 
  }, [dispatch]);

  
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      dispatch({ type: 'SET_AUTH', payload: true });
    } else {
      dispatch({ type: 'SET_AUTH', payload: false });
    }
  }, [dispatch]);

 
  const handleAddTask = (task) => {
    dispatch(addTask(task));
    localStorage.setItem('tasks', JSON.stringify([...tasks, task])); 
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    dispatch(deleteTask(id));
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); 
  };

  // Handle login and logout
  const handleLogin = () => {
    dispatch({ type: 'SET_AUTH', payload: true });
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    dispatch({ type: 'SET_AUTH', payload: false });
    localStorage.setItem('isAuthenticated', 'false');
   
    
  };

  return (
 
<div className="App">
      {isAuthenticated ? (
        <>
          <TaskInput onAddTask={handleAddTask} />
          <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} weather={weather} />

        
          {weather && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#ffeb3b',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                marginTop: '20px',
                maxWidth: '400px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <SunIcon sx={{ fontSize: 40, color: '#ff9800', marginRight: '10px' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Weather in {weather.name}
                </Typography>
              </Box>

              <Box sx={{ textAlign: 'right' }}>
                <Typography variant="body1" sx={{ fontSize: '18px' }}>
                  {Math.round(weather.main.temp - 273.15)}°C
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '14px', color: '#616161' }}>
                  {weather.weather[0].description}
                </Typography>
              </Box>
            </Box>
          )}

          
          <Button onClick={handleLogout} variant="outlined" sx={{ marginTop: '25px' , margin:'auto' , display: 'flex', alignItems: 'center' }}>
            Logout
          </Button>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
      </div>
  );
}

export default App;
