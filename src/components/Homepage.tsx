import React from 'react';
import profilePic from './Theo-4313.jpg';
import './Homepage.css';
import UnderConstruction from './UnderConstruction';

function Homepage() {
    return (
        <div>
            <div className="container homepage">
                <div className="profile-section">
                    <div className="img-container">
                        <img src={profilePic} alt="Theo Wilenius" className="profile-pic"/>
                    </div>
                    <h2 className="name">Theo Wilenius</h2>
                </div>
                <h1>Welcome to My CV Website</h1>
                <div className="paragraph-container">
                    <p>
                        Hello! I'm Theo Wilenius. It's great to have you on my website. I'm currently studying computer engineering at Åbo Akademi University, diving into the fascinating world of programming, data analytics, and machine learning.
                    </p>
                    <p>
                    Part of my journey involves working with our student association's website, where I contribute to maintaining and improving it using Django. It's an interesting experience that allows me to apply what I learn in a practical setting.
                    </p>
                    <p>
                    Outside of university, I'm just enjoying life in Turku, Finland, participating in student activities, or just taking in the day.
                    </p>
                    <p>
                    On this site, you'll find a bit about my projects and skills. If you're interested in tech, want to discuss a project, or just feel like saying hi, feel free to get in touch. Thanks for stopping by!
                    </p>
            </div>
            </div>
        <UnderConstruction />
        </div>
    );
}

export default Homepage;
