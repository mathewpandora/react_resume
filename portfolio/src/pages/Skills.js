import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Skills.css"; // Подключаем стили

const skillsData = {
    "Docker": [
        "Разветвление Dockerfile",
        "Создание многослойных образов",
        "Оптимизация контейнеров",
        "Docker Compose",
        "Оркестрация с Kubernetes"
    ],
    "Databases": {
        "SQL": ["PostgreSQL", "MySQL", "SQLite", "Оптимизация запросов"],
        "NoSQL": ["MongoDB", "Redis", "Cassandra", "Elasticsearch"]
    },
    "Frameworks": ["Django", "FastAPI", "Flask"],
    "Cloud": ["AWS (S3, EC2, Lambda)", "Google Cloud", "Azure"],
    "CI/CD": ["GitHub Actions", "GitLab CI", "Jenkins", "Terraform"],
    "Testing": ["pytest", "unittest", "TDD", "Mocking"],
    "Frontend": ["React", "TypeScript", "Tailwind CSS"]
};

const formattedSkills = JSON.stringify(skillsData, null, 4);

const Skills = () => {
    return (
        <div className="skills-preview">
            <div className="json-container">

            </div>

            <SyntaxHighlighter language="json" style={darcula} showLineNumbers>
                {formattedSkills}
            </SyntaxHighlighter>
        </div>
    );
};

export default Skills;
