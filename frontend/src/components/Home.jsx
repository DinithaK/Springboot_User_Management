import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/login');
        };
    return (
        <div style={{ textAlign: 'center', marginTop: '50px'}}>
            <h2>Welcome to the Inova User Management System</h2>
            <p>You have successfully logged in</p>

            <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', display: 'inline-block'}}>
                <h3>Quick Actions</h3>
                <Link to="/users" style={{ display: 'block', margin: '15px 0', textDecoration: 'none', color: '#007bff', fontWeight: 'bold'}}>
                    View & Manage User List
                </Link>
                <button onClick={handleLogout} style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px'}}>
                    Logout
                </button>
            </div>
        </div>
    );
}