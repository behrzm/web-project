import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterPage = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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

    const registerContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
    };

    const registerBoxStyle = {
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

    const backgroundImageStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: -1,
        height: '400px',
        width: '600px',
    };

    const handleRegister = (event) => {
        event.preventDefault();
        setShowSuccessMessage(true);
        setTimeout(() => {
            navigate('/loginpage');
        }, 5000);
    };

    return (
        <div style={containerStyle}>
            <nav style={navbarStyle}>
                <a className="navbar-brand" href="#" style={{ fontSize: '24px', color: 'white' }}>
                    2DO
                </a>
                <span className="navbar-text" style={{ color: 'white', fontSize: '20px' }}>
                    Registration page
                </span>
                <button onClick={toggleTheme} style={{ backgroundColor: 'transparent', border: 'none', color: 'white' }}>
                    {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>
            </nav>
            <div style={registerContainerStyle}>
                <div style={registerBoxStyle}>
                    <form onSubmit={handleRegister}>
                        <div className="mb-3">
                            <input className="form-control" placeholder="Username" type="text" style={formControlStyle} required />
                        </div>
                        <div className="mb-3">
                            <input className="form-control" placeholder="Email" type="email" style={formControlStyle} required />
                        </div>
                        <div className="mb-3">
                            <input className="form-control" placeholder="Password" type="password" style={formControlStyle} required />
                        </div>
                        <button className="btn" type="submit" style={buttonStyle}>
                            Register
                        </button>
                    </form>
                    {showSuccessMessage && (
                        <div className="alert alert-success mt-3" role="alert">
                            Registration successful! Redirecting to login page...
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;