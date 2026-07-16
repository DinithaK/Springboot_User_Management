import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

export default function UserList() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await api.get('/users');
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const handleLogout = () => {
        navigate('/login');
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure to delete?")) {
            try {
                await api.delete(`/users/${id}`);
                setUsers(users.filter(user => user.id !== id));
            } catch (error) {
                console.error("Error deleting user:", error);
                alert("Failed to delete the user.");
            }
        }
    };

    const handleEdit = async (user) => {
        const newName = window.prompt("Enter new name:", user.name);
        const newEmail = window.prompt("Enter new email:", user.email);
        const newPassword = window.prompt("Enter new password:", User.password);

        if (newName && newEmail && newPassword) {
            try {
                const response = await api.put('/users/${user.id}', {
                    name: newName,
                    email: newEmail,
                    password: newPassword
                });

                setUsers(users.map(u => (u.id === user.id ? response.data : u)));
            } catch (error) {
                console.error("Error updating user:, error");
                alert("Failed to update.");
            }
        }
    };

    return (
        <div style={{ maxWidth: '800px', margin: 'auto', marginTop: '50px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>User Dashboard</h2>
                <button onClick={handleLogout} style={{ height: '40px', cursor: 'pointer' }}>Logout</button>
            </div>

            <table border="1" style={{ width: '100%', textAlign: 'left', marginTop: '20px', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: '#333', color: 'white' }}>
                        <th style={{ padding: '10px' }}>ID</th>
                        <th style={{ padding: '10px' }}>Name</th>
                        <th style={{ padding: '10px' }}>Email</th>
                        <th style={{ padding: '10px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td style={{ padding: '10px' }}>{user.id}</td>
                            <td style={{ padding: '10px' }}>{user.name}</td>
                            <td style={{ padding: '10px' }}>{user.email}</td>
                            <td style={{ padding: '10px' }}>
                                <button style={{ marginRight: '10px', cursor: 'pointer' }}>Edit</button>
                                <button style={{ cursor: 'pointer', color: 'red' }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {users.length === 0 && <p style={{ textAlign: 'center', marginTop: '20px' }}>No users found in the database.</p>}
        </div>
    );
}