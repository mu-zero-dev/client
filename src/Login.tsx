import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');
    const navigate = useNavigate();

    const generateCaptcha = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setCaptcha(result);
    };

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (captchaInput !== captcha) {
            alert('Captcha does not match!');
            return;
        }
        alert('Login successful!');
        navigate('/dashboard');
    };

    React.useEffect(() => {
        generateCaptcha();
    }, []);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="#f4f4f4" sx={{ px: 2 }}>
            <Paper elevation={3} sx={{ p: 3, width: { xs: '100%', sm: '400px' } }}>
                <form onSubmit={handleLogin}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Login
                    </Typography>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Typography variant="body1" gutterBottom>
                        Captcha: <strong>{captcha}</strong>
                    </Typography>
                    <TextField
                        label="Enter Captcha"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={captchaInput}
                        onChange={(e) => setCaptchaInput(e.target.value)}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Login
                    </Button>
                    <Button
                        type="button"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        sx={{ mt: 2 }}
                        onClick={() => navigate('/')}
                    >
                        Back to Home
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default Login;