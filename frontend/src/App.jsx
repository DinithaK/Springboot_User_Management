import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import UserList from './components/UserList';
import Home from './components/Home';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    return isAuthenticated ? children : <Navigate to="/login" />;
    };

function App() {
    return (
        <BrowserRouter>

            <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
                <h1 style={{ textAlign: 'center' }}>Inova User Management</h1>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/home" element={<ProtectedRoute> <Home/> </ProtectedRoute>}/>

                    <Route path="/users" element={ <ProtectedRoute> <UserList /> </ProtectedRoute>} />
                </Routes>
            </div>

        </BrowserRouter>);
}
export default App;