import { projectsData } from '../../service/api';

import { RiCheckDoubleFill } from "react-icons/ri";

export default function ProjectsPage(){
    return (
        <section className="container-projects">
            <article className="projects-main">
                <div className="title-project">
                    <h1>My Work in Action</h1>
                    <p>Discover how I bring ideas to life through design and creativity.</p>
                </div>
                {projectsData.map((project, index) => (
                    <div className="project-item" key={index}>
                        <div className="item-left">
                            <h1>{project.title}</h1>
                            <h2>{project.subTitle}</h2>
                            <ul className="project-details-list">
                                {project.details.map((detail, detailIndex) => (
                                    <li key={detailIndex}>{detail}</li>
                                ))}
                            </ul>
                            <button>Ver mais</button>
                        </div>
                        <div className="item-right">
                            <img src={project.image} alt={project.title} />
                        </div>
                    </div>
                ))}
            </article>
        </section>
    );
};
