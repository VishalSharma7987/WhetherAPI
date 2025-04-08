import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/Action/authActions';
import { Button, Typography, Box } from '@mui/material';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <Box 
      className="flex items-center justify-center min-h-screen bg-gray-100 p-4"
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Box 
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
        sx={{
          '@media (max-width: 767px)': {
            padding: '16px',
            maxWidth: '90%',
          },
        }}
      >
        <Typography 
          variant="h4" 
          className="text-center text-gray-700 mb-4"
        >
          Please Login
        </Typography>
        
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          className="py-2 text-lg"
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
