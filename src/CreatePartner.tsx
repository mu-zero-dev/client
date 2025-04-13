import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const CreatePartner: React.FC = () => {
    const [partnerName, setPartnerName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    alert('Create Partner component loaded!');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const partnerData = { partnerName, mobileNumber };

        try {
            const response = await fetch('/api/create-partner', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(partnerData),
            });

            if (response.ok) {
                alert('Partner created successfully!');
                setPartnerName('');
                setMobileNumber('');
            } else {
                alert('Failed to create partner.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the partner.');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4, p: 2, boxShadow: 3, borderRadius: 2, backgroundColor: 'white' }}>
                <Typography variant="h5" component="h1" gutterBottom>
                    Create Partner
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Partner Name"
                        variant="outlined"
                        margin="normal"
                        value={partnerName}
                        onChange={(e) => setPartnerName(e.target.value)}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Mobile Number"
                        variant="outlined"
                        margin="normal"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Create Partner
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default CreatePartner;