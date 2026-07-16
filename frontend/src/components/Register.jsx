import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await api.post('/register', { name, email, password });
            setMessage('Registration successful! Redirecting to login...');
            setTimeout(() => navigate('/login'), 2000);
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setMessage('This email is already registered.');
            } else {
                setMessage('An error occurred during registration.');
            }
        }

    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
            <h2>Register</h2>
            {message && <p style={{ color: message.includes('successful') ? 'green' : 'red' }}>{message}</p>}

            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password (min 6)" value={password} onChange={(e) => setPassword(e.target.value)} required miLength="6" />
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>

    );
}