import React, { useState, useEffect } from "react";
import "./Frontend.css"; // Импортируем стили

const frontendText = `
Основной стек

React
Разработка SPA-приложений с использованием функциональных компонентов
Работа с хуками (useState, useEffect, useContext, кастомные хуки)
Роутинг через React-Router (v6+)
Управление состоянием:
Context API для простых проектов
Redux (базовый уровень) для сложных state-менеджментов
Работа с REST API (запросы через fetch/axios)
Основы оптимизации: React.memo, useCallback

Разработка кроссплатформенных приложений
Навигация (React Navigation - стековая, табы, дровер)
Работа с аудио (воспроизведение/запись музыки, управление плейлистами)
Локальное хранилище (AsyncStorage, SQLite)
Реализация сложной бизнес-логики (состояния, цепочки действий)
Стилизация (StyleSheet, кастомные UI-компоненты)
Оптимизация производительности (FlatList, виртуализация)
(Без опыта работы с нативными модулями - чисто Expo-решения)

Опыт работы
РЭУ Им. Г.В. Плеханова, младший техник
* Разработка UI для внутренних сервисов для автоматизации аудиторской деятельности

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
