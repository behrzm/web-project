import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage = () => {
    const { theme, toggleTheme } = useTheme();

    const navbarStyle = {
        backgroundColor: theme === 'light' ? '#ff6f61' : '#444',
        padding: '10px 20px',
        borderRadius: '20px',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const usernameButtonStyle = {
        backgroundColor: theme === 'light' ? '#ff6f61' : '#444',
        color: 'white',
        border: 'none',
        borderRadius: '20px',
        padding: '5px 15px',
    };

    const cardStyle = {
        backgroundColor: theme === 'light' ? '#ff9e9e' : '#555',
        borderRadius: '20px',
        width: '200px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: '20px',
        transition: 'transform 0.2s',
        textDecoration: 'none',
    };

    const cardTitleStyle = {
        fontWeight: 'bold',
        color: 'white',
        fontSize: '20px',
    };

    const cardContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'scale(1)';
    };

    return (
        <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', height: '100vh' }}>
            <nav style={navbarStyle}>
                <Link className="navbar-brand" to="/home" style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
                    Home
                </Link>
                <button style={usernameButtonStyle}>
                    Username
                </button>
                <button onClick={toggleTheme} style={{ backgroundColor: 'transparent', border: 'none', color: 'white' }}>
                    {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>
            </nav>
            <div className="container">
                <div className="row" style={cardContainerStyle}>
                    <Link
                        to="/todo_list"
                        style={cardStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h5 style={cardTitleStyle}>To-Do List</h5>
                    </Link>
                    <Link
                        to="/pomodoro_timer"
                        style={cardStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h5 style={cardTitleStyle}>Pomodoro Timer</h5>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainPage;