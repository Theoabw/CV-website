import profilePic from '../assets/Theo-4313.jpg';
import './Homepage.css';

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
                    <div className="divider"/>
                    <p>
                        Hello! I&apos;m Theo Wilenius. It&apos;s great to have you on my website. I&apos;m currently
                        studying computer engineering at Åbo Akademi University, diving into the fascinating world of
                        programming, data analytics, and machine learning.
                    </p>
                    <p>
                        Part of my journey involves working with our student association&apos;s website, where I
                        contribute to maintaining and improving it using Django. It&apos;s an interesting experience
                        that allows me to apply what I learn in a practical setting.
                    </p>
                    <p>
                        Outside of university, I&apos;m just enjoying life in Turku, Finland, participating in student
                        activities, or just taking in the day.
                    </p>
                    <p>
                        On this site, you&apos;ll find a bit about my projects and skills. If you&apos;re interested in
                        tech, want to discuss a project, or just feel like saying hi, feel free to get in touch. Thanks
                        for stopping by!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
