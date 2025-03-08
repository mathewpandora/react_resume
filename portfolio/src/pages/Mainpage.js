import React from "react";
import { useLocation } from "react-router-dom"; // Импортируем useLocation для отслеживания пути
import Sidebar from "../componetns/Sidebar";  // Импортируем компонент Sidebar
import ResumePreview from "./ResumePreview"; // Импортируем новый компонент для отображения Python кода
import "./MainPage.css";
import Backend from "./Backend";
import Header from "../componetns/Header";
import Frontend from "./Frontend";
import Skills from "./Skills";
export default function MainPage() {
    const location = useLocation(); // Получаем информацию о текущем пути

    return (
        <div className="main-page">
            <Header />
            <Sidebar /> {/* Вставляем боковое меню на страницу */}

            {/* Условно рендерим ResumePreview только на /home */}
            {location.pathname === "/home" && <ResumePreview />}
            {location.pathname === "/backend" && <Backend/>}
            {location.pathname === "/frontend" && <Frontend/>}
            {location.pathname === "/skills" && <Skills/>}
        </div>
    );
}
