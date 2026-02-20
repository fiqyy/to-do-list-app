import { useState, useEffect } from 'react';
import logo from '../assets/images/todolistlogo.png';

export default function Header ({ setSidebarOpen, user, onLogin, onLogout }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const handleLogin = (e) => {
        e && e.preventDefault();
        if (onLogin) onLogin(username.trim(), password);
        setPassword('');
        setShowLoginModal(false);
    };

    return (
        <div className="header">
            <div className='logo'>
                <img className= "logo" src={logo} alt="Logo" />
            </div>

            <div className="header-center" />

            <div className="auth-banner">
                {user && user.username ? (
                    <div className="user-info">
                        <span>Signed in: {user.username}</span>
                        <button onClick={() => onLogout && onLogout()}>Logout</button>
                    </div>
                ) : (
                    <>
                        {!isMobile && (
                            <form className="login-form" onSubmit={handleLogin}>
                                <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} required />
                                <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
                                <button type="submit">Sign in / Create</button>
                            </form>
                        )}

                        {isMobile && (
                            <>
                                <button className="mobile-login-button" onClick={() => setShowLoginModal(true)}>Sign in / Create</button>

                                {showLoginModal && (
                                    <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
                                        <div className="modal" onClick={e => e.stopPropagation()}>
                                            <button className="modal-close" onClick={() => setShowLoginModal(false)}>×</button>
                                            <form className="login-form" onSubmit={handleLogin}>
                                                <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} required />
                                                <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
                                                <button type="submit">Sign in / Create</button>
                                            </form>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}
            </div>

            <button className="menu-button" onClick={() => setSidebarOpen(prev => !prev)}>
                <img src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png" alt="Menu Icon" />
            </button>
        </div>
    )
}