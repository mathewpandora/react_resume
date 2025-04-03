import React from "react";
import "./Header.css";
import { useTerminal } from "../context/TerminalContext";

const Header = () => {
    const { isTerminalOpen, openTerminal, closeTerminal } = useTerminal();

    const handlePlayClick = () => {
        isTerminalOpen ? closeTerminal() : openTerminal();
    };

    return (
        <div className="header">

            {/* Добавляем PNG-иконку в правый верхний угол */}
            <img
                src={isTerminalOpen ? "/stop.png" : "/play.png"}
                alt={isTerminalOpen ? "Stop" : "Play"}
                className="play-icon"
                onClick={handlePlayClick}
            />
        </div>
    );
};

export default Header;