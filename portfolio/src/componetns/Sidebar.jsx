import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate для перехода
import "./Sidebar.css";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate(); // Хук для перехода на другую страницу

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Функция для обработки перехода по разным файлам
    const handleBackendClick = (path) => {
        navigate(path); // Переход на переданный путь
    };

    return (
        <>
            {/* Кнопка для открытия/закрытия меню с изображением папки */}
            <button className={`menu-button ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                <img src="/folder.png" alt="Folder" className="folder-icon" />
            </button>

            {/* Боковое меню */}
            <div className={`side-menu ${isOpen ? "open" : ""}`}>

                <div className="file-button" onClick={() => handleBackendClick("/home")}>
                    <img src="/python-icon.png" alt="Python" className="file-icon" />
                    main.py
                </div>

                <div className="file-button" onClick={() => handleBackendClick("/backend")}>
                    <img src="/pdf-icon.png" alt="PDF" className="file-icon" />
                    Backend.pdf
                </div>

                <div className="file-button" onClick={() => handleBackendClick("/frontend")}>
                    <img src="/pdf-icon.png" alt="PDF" className="file-icon" />
                    Frontend.pdf
                </div>


                <div className="file-button" onClick={() => handleBackendClick("/skills")}>
                    <img src="/json.png" alt="PDF" className="file-icon" />
                    Skills.json
                </div>
            </div>
        </>
    );
};

export default Sidebar;
