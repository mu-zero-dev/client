import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const LoadMoney: React.FC = () => {
    const [formData, setFormData] = useState({
        mobileNumber: '',
        amount: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/api/load-money', formData);
            console.log('Money loaded successfully:', response.data);
        } catch (error) {
            console.error('Error loading money:', error);
        }
    };

    return (
        <Box sx={{ maxWidth: { xs: '100%', sm: 400 }, mx: 'auto', mt: 4, px: 2 }}>
            <Typography variant="h4" gutterBottom>
                Load Money
            </Typography>
            <TextField
                fullWidth
                label="Mobile Number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                margin="normal"
            />
            <TextField
                fullWidth
                label="Amount (Rs.)"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                margin="normal"
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                sx={{ mt: 2, width: '100%' }}
            >
                Save
            </Button>
        </Box>
    );
};

export default LoadMoney;