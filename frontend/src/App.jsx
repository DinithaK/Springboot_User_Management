import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import UserList from './components/UserList';

function App() {
    return (
        <BrowserRouter>
            <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
                <h1 style={{ textAlign: 'center' }}>Inova User Management</h1>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/users" element={<UserList />} />
                </Routes>
            </div>
        </BrowserRouter>);
}
export default App;