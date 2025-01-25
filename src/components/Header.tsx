import "../styles/Header.css";

function Header() {
    return (
        <div className="header">
            <div>
                <img src="/mwmlogo.svg" className="logo" />
                <h1>Matthew McClure</h1>
            </div>
            <div>
                <a href="#">Home</a>
                <a href="#academics">Academics</a>
                <div className="interests">
                    <a href="#interests">My Interests</a>
                    <div className="dropdown">
                        <a href="#edge">EDGE</a>
                        <a href="#sensei">Sensei.AI</a>
                        <a href="#karate">Isshinryu Karate</a>
                        <a href="#mtb">Mountain Biking</a>
                        <a href="#aerospace">Aerospace</a>
                        <a href="#robotics">Robotics</a>
                        <a href="#programming">Programming</a>
                        <a href="#printing">3D Printing</a>
                        <a href="#volunteering">Volunteering</a>
                    </div>
                </div>
                <div className="media">
                    <a
                        href="https://www.linkedin.com/in/matthew-mcclure-9b1043279/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/linkedin.svg" />
                    </a>
                    <a
                        href="https://github.com/mwmcclure7"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/github.svg" />
                    </a>
                    <a
                        href="https://x.com/mwmcclure7"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/X_logo.svg" />
                    </a>
                    <a
                        href="https://www.instagram.com/mwmcclure7/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/instagram.svg" />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=100093244744550"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/facebook.svg" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
