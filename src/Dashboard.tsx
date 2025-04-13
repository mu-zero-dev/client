import { Box, Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import BulkUpload from './BulkUpload';
import CreatePartner from './CreatePartner';
import CreateUser from './CreateUser';
import LoadMoney from './LoadMoney';

const drawerWidth = 240;

const Dashboard: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
            <Drawer
                variant="permanent"
                sx={{
                    width: { xs: '100%', sm: drawerWidth },
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: { xs: '100%', sm: drawerWidth }, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItem component={Link} to="/dashboard/create-partner" sx={{ cursor: 'pointer' }}>
                            <ListItemText primary="Create Partner" />
                        </ListItem>
                        <ListItem component={Link} to="/dashboard/load-money" sx={{ cursor: 'pointer' }}>
                            <ListItemText primary="Load Money" />
                        </ListItem>
                        <ListItem component={Link} to="/dashboard/create-user" sx={{ cursor: 'pointer' }}>
                            <ListItemText primary="Create User" />
                        </ListItem>
                        <ListItem component={Link} to="/dashboard/bulk-upload" sx={{ cursor: 'pointer' }}>
                            <ListItemText primary="Bulk Upload" />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Routes>
                    <Route path="create-partner" element={<CreatePartner />} />
                    <Route path="load-money" element={<LoadMoney />} />
                    <Route path="create-user" element={<CreateUser />} />
                    <Route path="bulk-upload" element={<BulkUpload />} />
                </Routes>
            </Box>
        </Box>
    );
};

export default Dashboard;