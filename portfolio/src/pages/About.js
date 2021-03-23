import React from 'react';
import './style.css';

const Home = () => {
    return (
        <div className="container" id="container-index">
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
                    <h1 id="h1-about">Hello! My name is Zach Taylor.</h1>
                    <h1 id="h1-about">I'm a full-stack web developer located in Seguin Texas.</h1>
                    <p className="p-index"><h4>Some of the languages and technologies I work with are:</h4> React.js, MongoDB, Node.js, Express.js, Git, JavaScript, MySQL, Bootstrap, jQuery, Ajax, APIs, Object Oriented Programming, Linting and Continuous Integration, Progressive Web Apps, Web Optimization, Object Relational Mapping, Handlebars, HTML5, and CSS3.</p>
                    <p className="p-index">Here you can see some of the projects in my <a href="/portfolio" id="portfolio">portfolio</a></p>
                    <p className="p-index">Email me at <a href="mailto:ztayut2tx@gmail.com" id="email">ztayut2tx@gmail.com</a> or by phone at <a href="tel:+1-801-648-8668" id="phone">801-648-8668</a>.</p>
                    <p className="p-index">Here is my <a href="https://docs.google.com/document/d/1sq4k2Z18SyzF6yMt6x9aR9AJrM0ha7IbPz5w_L-8_LA/edit?usp=sharing" id="resume" target="_blank" rel="noreferrer">resume</a>.</p>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/ztayut2tx?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKm8RADVSSeSeTbYeKWz%2Faw%3D%3D" target="_blank" rel="noreferrer" id="linkedin"><i className="fab fa-linkedin-in fa-3x"></i></a>
                        <a href="https://github.com/ztayut2tx" target="_blank" rel="noreferrer" id="github"><i className="fab fa-github fa-3x"></i></a>
                    </div>
                </div>
                <div className="col-md-2">
                </div>
            </div>
        </div>
    );
}

export default Home;