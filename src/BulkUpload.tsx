import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const BulkUpload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            const uploadedFile = acceptedFiles[0];
            if (uploadedFile.type === 'application/vnd.ms-excel' || uploadedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                setFile(uploadedFile);
                setError(null);
            } else {
                setError('Please upload a valid Excel file (.xls or .xlsx).');
            }
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'application/vnd.ms-excel': ['.xls'],
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
        },
    });

    const handleUpload = async () => {
        if (!file) {
            setError('No file selected. Please upload a file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Upload successful:', response.data);
            alert('File uploaded successfully!');
        } catch (err) {
            console.error('Upload failed:', err);
            setError('File upload failed. Please try again.');
        }
    };

    return (
        <Box sx={{ px: 2 }}>
            <Typography variant="h5" gutterBottom>
                Bulk Upload
            </Typography>
            <Typography variant="body1" gutterBottom>
                Please upload an Excel file (.xls or .xlsx) with the following columns: Mobile Number, Amount in Rs.
            </Typography>
            <Button variant="outlined" href="/sample-template.xls" download sx={{ mb: 2 }}>
                Download Sample Template
            </Button>
            <Box
                {...getRootProps()}
                sx={{
                    border: '2px dashed #ccc',
                    padding: '20px',
                    marginTop: '20px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    width: { xs: '100%', sm: '400px' },
                    mx: 'auto',
                }}
            >
                <input {...getInputProps()} />
                {file ? (
                    <Typography variant="body1">Selected file: {file.name}</Typography>
                ) : (
                    <Typography variant="body1">Drag and drop a file here, or click to select a file</Typography>
                )}
            </Box>
            {error && (
                <Typography color="error" variant="body2" gutterBottom>
                    {error}
                </Typography>
            )}
            <Button
                variant="contained"
                color="primary"
                onClick={handleUpload}
                sx={{ marginTop: '20px', width: '100%' }}
            >
                Upload File
            </Button>
        </Box>
    );
};

export default BulkUpload;