import React from 'react';
import { useTerminal } from '../context/TerminalContext';
import './TerminalWindow.css';

const Terminal = () => {
    const { isTerminalOpen } = useTerminal();

    const output = [
        "Привет, меня зовут Матвей!",
        "Позиция: Программист | Специализируюсь на бекенд-разработка",
        "",
        "Контакты:",
        "Email: mathew.trofimov@yandex.ru",
        "GitHub: https://github.com/matheew_pandora"
    ];

    if (!isTerminalOpen) return null;

    return (
        <div className="terminal-container">
            <div className="terminal-header">
                <div className="terminal-tabs">
                    <div className="terminal-tab active">Terminal</div>
                    <div className="terminal-tab">Python Console</div>
                </div>
                <div className="terminal-actions">
                </div>
            </div>
            <div className="terminal-body">
                <div className="terminal-prompt">
                    <span className="prompt-path">~/resume/main.py</span>
                    <span className="prompt-arrow">❯</span>
                    <span className="prompt-command">python main.py</span>
                </div>
                {output.map((line, index) => (
                    <div key={index} className="terminal-line">
                        {line}
                    </div>
                ))}
                <div className="terminal-line">
                    <span className="prompt-arrow">❯</span>
                    <span className="cursor">█</span>
                </div>
            </div>
        </div>
    );
};

export default Terminal;