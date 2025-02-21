import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pomodoro = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
    const [isRunning, setIsRunning] = useState(false);
    const [isWorkTime, setIsWorkTime] = useState(true);
    const [workTime, setWorkTime] = useState(25);
    const [restTime, setRestTime] = useState(5);
    const [showSettings, setShowSettings] = useState(false);

    const workSound = new Audio(process.env.PUBLIC_URL + '/sounds/work_sound.mp3');
    const restSound = new Audio(process.env.PUBLIC_URL + '/sounds/rest_sound.mp3');

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (isRunning && timeLeft === 0) {
            if (isWorkTime) {
                restSound.play();
                setTimeLeft(restTime * 60);
                setIsWorkTime(false);
            } else {
                workSound.play();
                setTimeLeft(workTime * 60);
                setIsWorkTime(true);
            }
        }
    }, [isRunning, timeLeft, isWorkTime, restTime, workTime, restSound, workSound]);

    const startTimer = () => setIsRunning(true);
    const stopTimer = () => setIsRunning(false);

    const handleSaveSettings = () => {
        setTimeLeft(workTime * 60);
        setIsWorkTime(true);
        setShowSettings(false);
    };

    const calculateCircleStyle = () => {
        const totalTime = isWorkTime ? workTime * 60 : restTime * 60;
        const percentage = (timeLeft / totalTime) * 100;
        return {
            ...circleStyle,
            background: `conic-gradient(#A8F28A ${percentage}%, transparent ${percentage}%)`,
        };
    };

    const navbarStyle = {
        backgroundColor: theme === 'light' ? '#F76C5E' : '#444',
        padding: '10px',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const usernameButtonStyle = {
        backgroundColor: theme === 'light' ? '#F76C5E' : '#444',
        color: 'white',
        border: 'none',
        borderRadius: '20px',
        padding: '5px 15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const sidebarStyle = {
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        fontSize: '36px',
        color: theme === 'light' ? '#8C6D6D' : '#ccc',
        position: 'absolute',
        left: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
    };

    const controlPanelStyle = {
        backgroundColor: theme === 'light' ? '#F76C5E' : '#555',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginTop: '50px',
    };

    const buttonStyle = {
        backgroundColor: theme === 'light' ? '#FADCD9' : '#777',
        color: 'black',
        border: 'none',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px 0',
        width: '100%',
        fontSize: '18px',
        fontWeight: 'bold',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const timerStyle = {
        fontSize: '48px',
        fontWeight: 'bold',
        color: theme === 'light' ? 'black' : 'white',
        position: 'absolute',
        top: '50%',
        left: '70%',
        transform: 'translate(-50%, -50%)',
    };

    const circleStyle = {
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        left: '70%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const handleLogoClick = () => {
        navigate('/home');
    };

    return (
        <div style={{ backgroundColor: theme === 'light' ? '#FADCD9' : '#333', fontFamily: 'Arial, sans-serif', height: '100vh' }}>
            <nav style={navbarStyle}>
                <a className="navbar-brand" href="#" onClick={handleLogoClick}>
                    <img
                        alt="2DO logo"
                        src="https://storage.googleapis.com/a1aa/image/yy_vaRhzUnuX1u3Vz3yyhmzEMhRYGfjonc4ZH1V7C90.jpg"
                        style={{ height: '30px', marginRight: '10px' }}
                    />
                    2DO
                </a>
                <button style={usernameButtonStyle}>
                    Username
                </button>
                <button onClick={toggleTheme} style={{ backgroundColor: 'transparent', border: 'none', color: 'white' }}>
                    {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>
            </nav>
            <div style={sidebarStyle}>
                Pomodoro
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div style={controlPanelStyle}>
                            <button style={buttonStyle} onClick={startTimer}>Start</button>
                            <button style={buttonStyle} onClick={stopTimer}>Stop</button>
                            <button style={buttonStyle} onClick={() => setShowSettings(true)}>Settings</button>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div style={calculateCircleStyle()}></div>
                        <div style={timerStyle}>{`${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`}</div>
                    </div>
                </div>
            </div>
            {showSettings && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Settings</h5>
                                <button type="button" className="btn-close" onClick={() => setShowSettings(false)}></button>
                            </div>
                            <div className="modal-body">
                                <label>Work Time (minutes)</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={workTime}
                                    onChange={(e) => setWorkTime(e.target.value)}
                                />
                                <label>Rest Time (minutes)</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={restTime}
                                    onChange={(e) => setRestTime(e.target.value)}
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowSettings(false)}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleSaveSettings}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Pomodoro;