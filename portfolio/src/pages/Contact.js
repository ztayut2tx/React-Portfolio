import React from 'react';
import './style.css';

const Contact = () => {
    return (
        <div className="container" id="container-portfolio">
            <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                    <h1 id="h1-contact">Contact</h1>
                    <p id="p-portfolio">Email: <a href="mailto:ztayut2tx@gmail.com" id="email">ztayut2tx@gmail.com</a> or by phone at <a href="tel:+1-801-648-8668" id="phone">801-648-8668</a>.</p>
                    <div className="icons">
                    <a href="https://www.linkedin.com/in/ztayut2tx?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKm8RADVSSeSeTbYeKWz%2Faw%3D%3D" target="_blank" rel="noreferrer" id="linkedin"><i className="fab fa-linkedin-in fa-3x"></i></a>
                    <a href="https://github.com/ztayut2tx" target="_blank" rel="noreferrer" id="github"><i className="fab fa-github fa-3x"></i></a>
                    </div>
                </div>
                <div className="col-md-3">
                </div>
            </div>
        </div>
    );
}

export default Contact;