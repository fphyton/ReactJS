const Skills = () => {
    const skills = {
        "Front-end": ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
        "Back-end": ["Node.js", "Express", "MongoDB"],
        "Outils": ["Git", "VS Code", "Figma"]
    };

    return (
        <section className="skills">
            <h2>Mes Compétences</h2>
            <div className="skills-container">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="skill-category">
                        <h3>{category}</h3>
                        <ul>
                            {items.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;