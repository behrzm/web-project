import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    const containerStyle = {
        backgroundColor: theme === 'light' ? '#ffc1c1' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
        height: '100vh',
    };

    const navbarStyle = {
        backgroundColor: theme === 'light' ? '#ff6f61' : '#444',
        padding: '10px',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const loginContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
    };

    const loginBoxStyle = {
        backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        color: theme === 'light' ? '#000' : '#fff',
    };

    const formControlStyle = {
        borderRadius: '20px',
        border: `2px solid ${theme === 'light' ? '#ff6f61' : '#888'}`,
        backgroundColor: theme === 'light' ? '#fff' : '#555',
        color: theme === 'light' ? '#000' : '#fff',
    };

    const buttonStyle = {
        backgroundColor: '#ff6f61',
        color: 'white',
        borderRadius: '20px',
        width: '100%',
        marginTop: '10px',
    };

    const registerLinkStyle = {
        color: '#ff6f61',
        cursor: 'pointer',
    };

    const backgroundImageStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: -1,
        height: '400px',
        width: '600px',
    };

    const handleRegisterLinkClick = () => {
        navigate('/registerpage');
    };

    const handleLoginButtonClick = () => {
        navigate('/home');
    };

    return (
        <div style={containerStyle}>
            <nav style={navbarStyle}>
                <a className="navbar-brand" href="#" style={{ fontSize: '24px', color: 'white' }}>
                    2DO
                </a>
                <span className="navbar-text" style={{ color: 'white', fontSize: '20px' }}>
                    Authorization page
                </span>
                <button onClick={toggleTheme} style={{ backgroundColor: 'transparent', border: 'none', color: 'white' }}>
                    {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>
            </nav>
            <div style={loginContainerStyle}>
                <div style={loginBoxStyle}>
                    <form>
                        <div className="mb-3">
                            <input className="form-control" placeholder="Username" type="text" style={formControlStyle} />
                        </div>
                        <div className="mb-3">
                            <input className="form-control" placeholder="Password" type="password" style={formControlStyle} />
                        </div>
                        <div className="mb-3 text-center">
                            <span>
                                Don't have an account?
                                <span className="register-link" style={registerLinkStyle} onClick={handleRegisterLinkClick}>
                                    Register...
                                </span>
                            </span>
                        </div>
                        <button className="btn" type="button" style={buttonStyle} onClick={handleLoginButtonClick}>
                            Login
                        </button>
                        <button className="btn" type="button" style={buttonStyle}>
                            <i className="fab fa-google"></i> Continue with Google
                        </button>
                        <button className="btn" type="button" style={buttonStyle}>
                            <i className="fab fa-apple"></i> Continue with Apple
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;