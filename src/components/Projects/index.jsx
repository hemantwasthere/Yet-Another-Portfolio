import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import projectsData from '../../data/projects.json';
import cloudimage from '../../assets/images/cloudimage.png';
import hulu from '../../assets/images/hulu.png';
import medium from '../../assets/images/medium.png';
import Netflix from '../../assets/images/Netflix.png';

const Projects = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-no-hover-color');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }); 


    const renderProjects = (project) => {
        return (
            <div className="images-container">
                {
                    project.map((proj, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={proj.cover==='Netflix' ? Netflix : proj.cover==='cloudimage' ? cloudimage : proj.cover==='hulu' ? hulu : medium}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{proj.title}</p>
                                    <h4 className="description">{proj.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(proj.url)}
                                    >View</button>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(proj.code)}
                                    >Code</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Projects".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderProjects(projectsData.projects)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Projects;