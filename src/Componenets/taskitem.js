import React from 'react';
import { IconButton, Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskItem = ({ task, onDelete, weather }) => {
 
  const isOutdoorActivity = (taskText) => {
    return taskText.toLowerCase().includes('outdoor');
  };

  
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'text-red-500';  
      case 'Medium':
        return 'text-yellow-500';  
      case 'Low':
        return 'text-green-500';  
      default:
        return 'text-gray-500'; 
    }
  };

  return (
    <Box className="flex justify-between items-center py-4 px-6 mb-4 bg-white shadow-md rounded-lg">
    
      <Box className="flex flex-col">
        <Typography variant="h6" className="font-semibold">{task.text}</Typography>
        <Typography variant="body2" className={`font-semibold ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </Typography>
      </Box>

      {isOutdoorActivity(task.text) && weather ? (
        <Box className="text-center">
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            {Math.round(weather.main.temp - 273.15)}°C
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px', color: '#616161' }}>
            {weather.weather[0].description}
          </Typography>
        </Box>
      ) : (
        <Box className="text-center">
          <Typography variant="body2" sx={{ fontSize: '12px', color: '#616161' }}>N/A</Typography>
        </Box>
      )}

     
      <IconButton
        edge="end"
        color="secondary"
        onClick={() => onDelete(task.id)}
        sx={{ marginLeft: 'auto' }}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default TaskItem;
