import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <h3>Matthew McClure</h3>
            <a href="mailto:mwmcclure7@gmail.com">mwmcclure7@gmail.com</a>
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
    );
}

export default Footer;