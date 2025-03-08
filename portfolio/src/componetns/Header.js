// src/components/Header.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Для перехода на другую страницу
import "./Header.css"; // Для дополнительных стилей

const Header = () => {
    const navigate = useNavigate(); // Используем useNavigate для перехода

    const handlePlayClick = () => {
        navigate("/home"); // Переход на страницу /home
    };

    return (
        <div className="header">

            {/* Добавляем PNG-иконку в правый верхний угол */}
            <img
                src="/play.png"
                alt="Play"
                className="play-icon"
                onClick={handlePlayClick}
            />
        </div>
    );
};

export default Header;
