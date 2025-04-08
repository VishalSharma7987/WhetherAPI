import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Box } from '@mui/material';

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      onAddTask({ id: Date.now(), text: task, priority });
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input-form">
      <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '500px', margin: 'auto', paddingTop:'2rem' }}>
        <TextField
          label="Task"
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          fullWidth
          className="mb-4"
          size="small"
          style={{paddingBottom:'2rem'}}
        />
        <FormControl fullWidth className="mb-4">
          <InputLabel>Priority</InputLabel>
          <Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            label="Priority"
            size="small"
          >
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" style={{width:'15rem' , margin:'auto', marginTop:'2rem'}}>
          Add Task
        </Button>
      </Box>
    </form>
  );
};

export default TaskInput;
