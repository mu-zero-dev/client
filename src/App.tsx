import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              PrepaidRail
            </Typography>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
