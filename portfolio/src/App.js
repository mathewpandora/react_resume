import { TerminalProvider } from '../src/context/TerminalContext';
import './App.css';
import MainPage from './pages/Mainpage';
import React from "react";

function App() {
    return (
        <TerminalProvider>
        <div>
            <MainPage />
        </div>
        </TerminalProvider>

);
}

export default App;
