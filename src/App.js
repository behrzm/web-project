import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OpeningPage from './react_codes/LogoComponent';
import LoginPage from './react_codes/LoginPage';
import RegisterPage from './react_codes/Registration_page';
import MainPage from './react_codes/MainPage';
import Todo_list from './react_codes/todo';
import Pomodoro from './react_codes/pomodoro';
import { ThemeProvider } from './react_codes/ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    <Route path="/opening" element={<OpeningPage />} />
                    <Route path="/loginpage" element={<LoginPage />} />
                    <Route path="/registerpage" element={<RegisterPage />} />
                    <Route path="/home" element={<MainPage />} />
                    <Route path="/todo_list" element={<Todo_list />} />
                    <Route path="/pomodoro_timer" element={<Pomodoro />} />
                    <Route path="/" element={<OpeningPage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;