import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const todo = () => {
    const headerStyle = {
        backgroundColor: '#f05d5d',
        padding: '10px',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const logoStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'white',
    };

    const usernameStyle = {
        backgroundColor: '#f08d8d',
        padding: '10px 20px',
        borderRadius: '20px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
    };

    const circleStyle = {
        width: '20px',
        height: '20px',
        backgroundColor: '#d9a3a3',
        borderRadius: '50%',
        marginRight: '10px',
    };

    const sidebarStyle = {
        position: 'absolute',
        top: '100px',
        left: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const buttonStyle = {
        backgroundColor: '#f05d5d',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        margin: '10px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const verticalTextStyle = {
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)',
        fontSize: '24px',
        color: '#8c8c8c',
        marginTop: '20px',
    };

    const contentStyle = {
        marginLeft: '80px',
        marginTop: '20px',
        backgroundColor: '#f05d5d',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const daysStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
    };

    const dayStyle = {
        backgroundColor: '#f8c8c8',
        padding: '10px 20px',
        borderRadius: '20px',
        fontWeight: 'bold',
        color: 'black',
    };

    const scheduleStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const timeSlotStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5px 0',
        borderBottom: '1px solid #f8c8c8',
        color: 'white',
    };

    return (
        <div style={{ backgroundColor: '#f8c8c8', fontFamily: 'Arial, sans-serif', height: '100vh' }}>
            <div style={headerStyle}>
                <div style={logoStyle}>2DO</div>
                <div style={usernameStyle}>
                    <div style={circleStyle}></div>
                    Username
                </div>
            </div>
            <div style={sidebarStyle}>
                <button style={buttonStyle}>+</button>
                <button style={buttonStyle}>-</button>
                <div style={verticalTextStyle}>To-Do List</div>
            </div>
            <div style={contentStyle}>
                <div style={daysStyle}>
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                        <div key={day} style={dayStyle}>{day}</div>
                    ))}
                </div>
                <div style={scheduleStyle}>
                    {Array.from({ length: 24 }, (_, i) => (
                        <div key={i} style={timeSlotStyle}>{`${i.toString().padStart(2, '0')}:00`}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default todo;