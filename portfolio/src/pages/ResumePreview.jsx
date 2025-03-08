import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../componetns/ResumePreview.css"; // Для дополнительного стиля

const ResumePreview = () => {
    const resumeContent = `#Резюме
"""чтобы более подробно познакомиться со мной:
смотри файлы проекта"""
     
def display_resume():
    name = "Трофимов Матвей"
    birth_date = "05.09.2004"
    position = "Программист"
    specialization = "бекенд-разработка"
    contacts = {
        "Email": "trofimov.mat@yandex.ru",
        "Телефон": "+7 915 302-94-75",
        "Telegram": "https://t.me/matheew_pandora",
        "GitHub": "https://github.com/matheew_pandora"
    }

    # Выводим информацию о резюме
    print(f"Привет, меня зовут {name}!")
    print(f"Дата рождения: {birth_date}")
    print(f"Позиция: {position} | Специализируюсь на {specialization}")

    print("\\nКонтакты:")
    for label, contact in contacts.items():
        print(f"{label}: {contact}")

def main():
    display_resume()

if __name__ == '__main__':
    main()
`;

    return (
        <div className="resume-preview">
            <SyntaxHighlighter language="python" style={darcula} showLineNumbers>
                {resumeContent}
            </SyntaxHighlighter>
        </div>
    );
};

export default ResumePreview;
