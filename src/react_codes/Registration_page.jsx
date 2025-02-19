import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Registration_page = () => {
    const containerStyle = {
        backgroundColor: '#ffc1c1',
        fontFamily: 'Arial, sans-serif',
        height: '100vh',
    };

    const navbarStyle = {
        backgroundColor: '#ff6f61',
        padding: '10px',
    };

    const formContainerStyle = {
        background: 'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const formControlStyle = {
        borderRadius: '20px',
        marginBottom: '10px',
    };

    const buttonStyle = {
        backgroundColor: '#ff6f61',
        color: 'white',
        borderRadius: '20px',
        width: '100%',
        marginBottom: '10px',
    };

    const imageContainerStyle = {
        position: 'relative',
    };

    const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
    };

    const formOverlayStyle = {
        position: 'absolute',
        top: '50%',
        right: '10%',
        transform: 'translateY(-50%)',
        width: '300px',
    };

    return (
        <div style={containerStyle}>
            <nav className="navbar">
                <div className="container-fluid" style={navbarStyle}>
                    <a className="navbar-brand" href="#" style={{ color: 'white', fontSize: '24px' }}>
                        2DO
                    </a>
                    <span className="navbar-text" style={{ color: 'white', fontSize: '18px' }}>
                        Authorization page
                    </span>
                </div>
            </nav>
            <div className="container d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                <div style={imageContainerStyle}>
                    <img
                        alt="Illustration of a person holding a large pencil next to a clipboard with a to-do list"
                        src="https://storage.googleapis.com/a1aa/image/S8akEi7si7tWq79RwtAmHlIVFrolWFuFGOU7ia6pyJM.jpg"
                        style={imageStyle}
                    />
                    <div style={formOverlayStyle}>
                        <div style={formContainerStyle}>
                            <input className="form-control" placeholder="Username" type="text" style={formControlStyle} />
                            <input className="form-control" placeholder="Email" type="text" style={formControlStyle} />
                            <input className="form-control" placeholder="Password" type="password" style={formControlStyle} />
                            <input className="form-control" placeholder="Confirm password" type="password" style={formControlStyle} />
                            <button className="btn" style={buttonStyle}>
                                Register
                            </button>
                            <button className="btn" style={buttonStyle}>
                                <i className="fab fa-google"></i> Continue with Google
                            </button>
                            <button className="btn" style={buttonStyle}>
                                <i className="fab fa-apple"></i> Continue with Apple
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration_page;