import UnderConstruction from "./UnderConstruction.jsx";

const Portfolio = () => {
    return (
        <div className="container">
            <div className="paragraph-container">
                <h1>Portfolio</h1>
                <div className="divider"/>
                <p>
                    The portfolio is a showcase of my technical endeavors and projects.
                    It is a work in progress and will be updated as I complete more projects.
                </p>
                <ul>
                    <li>
                        One of the projects I have completed is a page for country data. You can view it
                        <a href="https://country.tabw.dev" target="_blank" rel="noopener noreferrer"> here</a>.
                    </li>
                    <li>
                        I have also contributed to my student association's website. You can check my
                        contributions
                        <a href="https://github.com/Datateknologerna-vid-Abo-Akademi/date-website" target="_blank"
                           rel="noopener noreferrer"> here</a>.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Portfolio;
