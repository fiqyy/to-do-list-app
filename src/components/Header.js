import { useState } from 'react';
import logo from '../assets/images/todolistlogo.png';

export default function Header ({ setSidebarOpen, user, onLogin, onLogout }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e && e.preventDefault();
        if (onLogin) onLogin(username.trim(), password);
        setPassword('');
    };

    return (
        <div className="header">
            <div className='logo'>
                <img className= "logo" src={logo} alt="Logo" />
            </div>

            <div className='name'>
                <p>My To Do List</p>
            </div>

            <div className='search'>
                <input type="text" className="search" placeholder="Search tasks..." />
            </div>

            <button className="menu-button" onClick={() => setSidebarOpen(prev => !prev)}>
                <img src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png" alt="Menu Icon" />
            </button>

            <div className="auth-banner">
                {user && user.username ? (
                    <div className="user-info">
                        <span>Signed in: {user.username}</span>
                        <button onClick={() => onLogout && onLogout()}>Logout</button>
                    </div>
                ) : (
                    <form className="login-form" onSubmit={handleLogin}>
                        <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} required />
                        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
                        <button type="submit">Sign in / Create</button>
                    </form>
                )}
            </div>
        </div>
    )
}