import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import UserList from './components/UserList';

function App() {
    return (
        <BrowserRouter>
            <div style={{fontFamily: 'sans-serif'}}>
                <nav style={{backgroundColor: '#282c34', padding: '15px', textAlign: 'center'}}>
                    <Link to="/users" style={{color: 'white', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold'}}>Dashboard</Link>
                    <Link to="/login" style={{color: 'white', margin: '0 15px', textDecoration: 'none'}}>Login</Link>
                    <Link to="/register" style={{color: 'white', margin: '0 15px', textDecoration: 'none'}}>Register</Link>
                </nav>

            <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
                <h1 style={{ textAlign: 'center' }}>Inova User Management</h1>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/users" element={<UserList />} />
                </Routes>
            </div>
            </div>
        </BrowserRouter>);
}
export default App;