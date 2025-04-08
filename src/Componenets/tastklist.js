import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography } from '@mui/material';

const TaskList = ({ tasks, onDeleteTask, weather }) => {
  
  const isOutdoorActivity = (taskText) => {
    return taskText.toLowerCase().includes('outdoor');
  };

  return (
    <TableContainer component={Paper} className="mb-4 shadow-md rounded-lg">
      <Table sx={{ minWidth: 650 }} aria-label="task table">
        <TableHead className="bg-gray-100">
          <TableRow>
            <TableCell className="font-bold">Task</TableCell>
            <TableCell align="center" className="font-bold">Priority</TableCell>
            <TableCell align="center" className="font-bold">Actions</TableCell>
           
            <TableCell align="center" className="font-bold">Weather</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.text}</TableCell>
              <TableCell align="center">
                <span className={`font-semibold ${task.priority === 'High' ? 'text-red-500' : task.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>
                  {task.priority}
                </span>
              </TableCell>
              <TableCell align="center">
                <IconButton color="secondary" onClick={() => onDeleteTask(task.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>

              <TableCell align="center">
                {isOutdoorActivity(task.text) && weather ? (
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                      {Math.round(weather.main.temp - 273.15)}°C
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '12px', color: '#616161' }}>
                      {weather.weather[0].description}
                    </Typography>
                  </Box>
                ) : (
                  <Typography variant="body2" sx={{ fontSize: '12px', color: '#616161' }}>
                    N/A
                  </Typography>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskList;
