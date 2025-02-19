import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
    const containerStyle = {
        backgroundColor: '#ffc1c1',
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
        height: '100vh',
    };

    const navbarStyle = {
        backgroundColor: '#ff6f61',
        padding: '10px',
        borderRadius: '20px',
    };

    const loginContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
    };

    const loginBoxStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    };

    const formControlStyle = {
        borderRadius: '20px',
        border: '2px solid #ff6f61',
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

    return (
        <div style={containerStyle}>
            <nav style={navbarStyle}>
                <a className="navbar-brand" href="#" style={{ fontSize: '24px', color: 'white' }}>
                    2DO
                </a>
                <span className="navbar-text" style={{ color: 'white', fontSize: '20px' }}>
                    Authorization page
                </span>
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
                                <a className="register-link" href="#" style={registerLinkStyle}>
                                    Register...
                                </a>
                            </span>
                        </div>
                        <button className="btn" type="submit" style={buttonStyle}>
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
            <img
                alt="Illustration of a person holding a large pencil and a clipboard with a to-do list"
                src="https://storage.googleapis.com/a1aa/image/Zds7HLTgMCUuDFUfjdWdZbIizl41M7cCtxuFJFxYyeQ.jpg"
                style={backgroundImageStyle}
            />
        </div>
    );
};

export default LoginPage;