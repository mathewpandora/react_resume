import React, { useState, useEffect } from "react";
import "./Frontend.css"; // Импортируем стили

const frontendText = `
Backend Skills & Achievements

Skills:
- Python (Flask, Django, FastAPI)
- RESTful APIs Development
- Database Management (PostgreSQL, MySQL, SQLite)
- ORM (SQLAlchemy, Django ORM)
- Authentication (JWT, OAuth)
- CI/CD Pipelines (GitHub Actions, Jenkins)
- Version Control (Git, GitHub, GitLab)
- Docker & Containerization
- Testing (Pytest, Unittest, TDD)
- Server Management (Nginx, Apache)

Achievements:
- Developed a robust backend for an e-commerce platform with Django and Django Rest Framework.
- Optimized database queries resulting in a 30% improvement in performance.
- Implemented automated testing and CI/CD pipelines, reducing deployment time by 50%.
- Designed and maintained RESTful APIs for a real-time messaging app using FastAPI.
- Implemented JWT-based authentication for secure user access to various services.
- Utilized Docker to containerize backend services, making deployments faster and more consistent.
`;

const Frontend = () => {
    const [text, setText] = useState(""); // Храним текущий текст
    const [index, setIndex] = useState(0); // Текущая позиция в тексте

    useEffect(() => {
        if (index < frontendText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + frontendText[index]); // Добавляем символ
                setIndex((prev) => prev + 1);
            }, 20); // Скорость печати (чем меньше, тем быстрее)
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <div className="pdf-container">
            <pre className="pdf-content">{text}</pre>
        </div>
    );
};

export default Frontend;
