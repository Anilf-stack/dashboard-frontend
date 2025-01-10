import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import BgImg from '../../assets/image-illustrator.png';

const Background = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${BgImg})`, // Replace with the actual path to your image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100vw', // Full width of the viewport
  height: '100vh', // Full height of the viewport
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const LoginContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  maxWidth: 400,
  width: '100%',
}));

const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#d81b60',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#ad1457',
  },
}));

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Add login logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <Background>
      <LoginContainer>
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
          NeyX Dashboard Log In
        </Typography>
        <Typography variant="body2" textAlign="center" mb={3}>
          Enter your email and password to Sign In
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Current password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              }
              label="Remember me"
            />
            <Typography
              variant="body2"
              color="primary"
              sx={{ cursor: 'pointer', textDecoration: 'underline' }}
              onClick={() => alert('Forgot password functionality!')}
            >
              Forgot the password?
            </Typography>
          </Box>
          <LoginButton
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3 }}
            onClick={handleLogin}
          >
            Sign In
          </LoginButton>
        </Box>
      </LoginContainer>
    </Background>
  );
}

export default LoginPage;
