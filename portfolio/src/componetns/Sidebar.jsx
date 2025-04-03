import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <>
            <button className={`menu-button ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                <img src="/folder.png" alt="Folder" className="folder-icon" />
            </button>

            <div className={`side-menu ${isOpen ? "open" : ""}`}>
                <div
                    className={`file-button ${isActive("/home") ? "active" : ""}`}
                    onClick={() => navigate("/home")}
                >
                    <img src="/python-icon.png" alt="Python" className="file-icon" />
                    main.py
                </div>

                <div
                    className={`file-button ${isActive("/backend") ? "active" : ""}`}
                    onClick={() => navigate("/backend")}
                >
                    <img src="/pdf-icon.png" alt="PDF" className="file-icon" />
                    Backend.pdf
                </div>

                <div
                    className={`file-button ${isActive("/frontend") ? "active" : ""}`}
                    onClick={() => navigate("/frontend")}
                >
                    <img src="/pdf-icon.png" alt="PDF" className="file-icon" />
                    Frontend.pdf
                </div>

            </div>
        </>
    );
};

export default Sidebar;