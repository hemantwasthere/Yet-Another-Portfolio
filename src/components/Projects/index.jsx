import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import portfolioData from '../../data/projects.json';
import NewsMonkey from '../../assets/images/NewsMonkey.png';
import hulu from '../../assets/images/hulu.png';
import imageGallery from '../../assets/images/image-gallery.png';
import Netflix from '../../assets/images/Netflix.png';

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    console.log(portfolioData);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }); 


    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.cover==='Netflix' ? Netflix : port.cover==='NewsMonkey' ? NewsMonkey : port.cover==='hulu' ? hulu : imageGallery}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.code)}
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
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;