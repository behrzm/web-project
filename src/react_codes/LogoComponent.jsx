import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const LogoComponent = () => {

    const navigate = useNavigate();

    useEffect(() => {
        // Set a timer to navigate to the login page after 2 seconds
        const timer = setTimeout(() => {
            navigate('/loginpage');
        }, 2000);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f8f9fa' }}>
            <h1>Welcome to 2DO</h1>
            {/* You can add your logo or any other content here */}
        </div>
    );

    const containerStyle = {
        height: '100%',
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
    };

    const logoContainerStyle = {
        backgroundColor: '#ff6f61',
        borderRadius: '15px',
        padding: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const logoTextStyle = {
        fontSize: '100px',
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
    };

    const beforeAfterStyle = {
        content: "''",
        position: 'absolute',
        height: '20px',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '10px',
    };

    return (
        <div style={containerStyle}>
            <div style={logoContainerStyle}>
                <div style={logoTextStyle}>
                    2DO
                    <div style={{ ...beforeAfterStyle, top: 0 }} />
                    <div style={{ ...beforeAfterStyle, bottom: 0 }} />
                </div>
            </div>
        </div>
    );
};

export default LogoComponent;