import React from 'react';

function About() {
    return (
        <div className="container">
            <div className={"paragraph-container"}>
            <h2 style={{color: "var(--header-color)"}}>About Me</h2>
            <p>
                Hello! I'm Theo Wilenius. At 21, I'm navigating the exciting world of Computer Engineering at
                Åbo Akademi in Turku. My academic journey is complemented by a passion for practical, real-world tech
                applications—especially in the realms of web development and IT.
            </p>
            <p>
                Artificial Intelligence fascinates me. It's the frontier of technology that I'm eager to explore,
                armed with my proficiency in Python and a natural flair for problem-solving. My experience ranges from
                updating websites for student groups to tackling complex coding challenges. Along the way, I've honed
                my skills in teamwork and communication, further polished by my time in the military.
            </p>
            <p>
                I'm on a mission to deepen my technical expertise and create a meaningful impact in the tech space.
                Let's connect and lead the charge into the future of technology together.
            </p>
            </div>
        </div>
    );
}

export default About;
