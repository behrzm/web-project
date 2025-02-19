import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const pomodoro = () => {
    const navbarStyle = {
        backgroundColor: '#F76C5E',
        padding: '10px',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const usernameButtonStyle = {
        backgroundColor: '#F76C5E',
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
        color: '#8C6D6D',
        position: 'absolute',
        left: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
    };

    const controlPanelStyle = {
        backgroundColor: '#F76C5E',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginTop: '50px',
    };

    const buttonStyle = {
        backgroundColor: '#FADCD9',
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
        color: 'black',
        position: 'absolute',
        top: '50%',
        left: '70%',
        transform: 'translate(-50%, -50%)',
    };

    const circleStyle = {
        width: '300px',
        height: '300px',
        border: '20px solid #A8F28A',
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        left: '70%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div style={{ backgroundColor: '#FADCD9', fontFamily: 'Arial, sans-serif', height: '100vh' }}>
            <nav style={navbarStyle}>
                <a className="navbar-brand" href="#">
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
            </nav>
            <div style={sidebarStyle}>
                Pomodoro
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div style={controlPanelStyle}>
                            <button style={buttonStyle}>Start</button>
                            <button style={buttonStyle}>Stop</button>
                            <button style={buttonStyle}>Settings</button>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div style={circleStyle}></div>
                        <div style={timerStyle}>25:00</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default pomodoro;