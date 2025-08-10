
import { skillsData } from "../../service/api";

export default function SkillsPage() {
    return (
        <section className="container-skills">
            <article className="skills-main">
                {skillsData.map((project, index) => (
                    <div key={index} className="project-item">
                        <h3>{project.title}</h3>
                        
                        <ul>
                            {project.info.map((item, infoIndex) => (
                                <li key={infoIndex}>{item}</li>
                            ))}
                        </ul>
                        
                        <div className="skills-list">
                            {project.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="skill-item">
                                    <img src={skill.image} alt={skill.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </article>
            <article className="skills-footer">
                <div className='footer-title'>
                    <h1>Minha contribuição</h1>
                    <div></div>
                    <h2>Habilidades técnicas e conhecimento em software</h2>
                </div>
            </article>
        </section>
    );
}