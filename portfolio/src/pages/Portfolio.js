import React from 'react';
import './style.css';
import Project from '../components/Project';
import projects from '../projects.json';

const Portfolio = () => {
    return (
        <div className="container" id="container-portfolio">
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
                    <h1>Portfolio</h1>
                    <h5 id="p-portfolio">Some Project's ive done or contributed too:</h5>
                    <div className="row" id="projectBox">
                        <Project 
                            image={projects[0].image}
                            title={projects[0].title}
                            description={projects[0].description}
                            technologies={projects[0].technologies}
                            deployed={projects[0].deployed}
                            repo={projects[0].repo}
                        />
                        <Project 
                            image={projects[1].image}
                            title={projects[1].title}
                            description={projects[1].description}
                            technologies={projects[1].technologies}
                            repo={projects[1].repo}
                        />
                    </div>
                    <div className="row">
                        <Project 
                            image={projects[2].image}
                            title={projects[2].title}
                            description={projects[2].description}
                            technologies={projects[2].technologies}
                            deployed={projects[2].deployed}
                            repo={projects[2].repo}
                        />
                        <Project 
                            image={projects[3].image}
                            title={projects[3].title}
                            description={projects[3].description}
                            technologies={projects[3].technologies}
                            repo={projects[3].repo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;