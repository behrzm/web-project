import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const MainPage = () => {
    const navbarStyle = {
        backgroundColor: '#ff6f61',
        padding: '10px 20px',
        borderRadius: '20px',
        marginBottom: '20px',
    };

    const usernameButtonStyle = {
        backgroundColor: '#ff6f61',
        color: 'white',
        border: 'none',
        borderRadius: '20px',
        padding: '5px 15px',
    };

    const cardStyle = {
        backgroundColor: '#ff9e9e',
        borderRadius: '20px',
        padding: '20px',
        textAlign: 'center',
        margin: '20px',
    };

    const cardImageStyle = {
        width: '100px',
        height: '100px',
    };

    return (
        <div>
            <nav style={navbarStyle}>
                <a className="navbar-brand" href="#" style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
                    2DO
                </a>
                <button style={usernameButtonStyle}>
                    Username
                </button>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div style={cardStyle} className="card">
                            <img
                                alt="Illustration of a to-do list with colorful bars"
                                src="https://storage.googleapis.com/a1aa/image/disbPmA8mCL81Jv6Ec-4VYAyckwdyEOemlbNTkHT2ZA.jpg"
                                style={cardImageStyle}
                            />
                            <h5 className="card-title" style={{ fontWeight: 'bold', marginTop: '10px' }}>
                                To-Do List
                            </h5>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div style={cardStyle} className="card">
                            <img
                                alt="Illustration of a tomato-shaped timer"
                                src="https://storage.googleapis.com/a1aa/image/-avmx4uukvZdeSG6sk5aWzvl-4mf4RfF3QV2Eu1ZVLY.jpg"
                                style={cardImageStyle}
                            />
                            <h5 className="card-title" style={{ fontWeight: 'bold', marginTop: '10px' }}>
                                Pomodoro Timer
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;