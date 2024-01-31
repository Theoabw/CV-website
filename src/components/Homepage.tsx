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
                    Welcome to the digital hub of Theo Wilenius, an enthusiastic Computer Engineering student at Åbo
                    Akademi. Here you'll find a blend of academic achievement and hands-on tech projects, with a special
                    focus on web development and IT. Take a journey through my portfolio, experience, and the AI
                    innovations that inspire me daily.
                </p>
            </div>
            </div>
        <UnderConstruction />
        </div>
    );
}

export default Homepage;
