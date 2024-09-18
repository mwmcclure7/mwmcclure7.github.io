import "../styles/Interest.css";
import Carousel from "../components/Carousel";

function Sensei() {
    const images = [
        "sensei1.png",
        "sensei2.png",
        "sensei3.png",
        "sensei4.png",
        "sensei5.png",
    ];

    return (
        <div className="interest">
            <div className="intro">
                <div>
                    <h1>Sensei.AI</h1>
                    <p>
                        Sensei.AI LLC was founded in 2024 with the goal of using
                        technology to modernize education. In the past,
                        education could only be achieved by attending group
                        classes, hiring a personal tutor, or using available
                        books and online resources to self-educate. The recent
                        growth of generative AI, however, adds an additional
                        solution: education through AI. At Sensei.AI, we believe
                        that artificial intelligence has the potential to
                        revolutionize the way we learn, as it is more affordable
                        and accessible than hiring a tutor or enrolling in a
                        class, while also being more personalized and
                        interactive than previous mediums of self-education. I
                        also believe that as AI becomes more sophisticated, it
                        will become increasingly important to be able to pass on
                        knowledge learned by AI back to humans. It is our hope
                        that Sensei can be a step toward improved communication
                        between people and AI so humanity can benefit from the
                        knowledge it gains. To learn more about Sensei.AI, visit
                        the link below. You can also try Sensei for yourself
                        by creating an account. You will receive a one month
                        free trial with no credit card required.
                    </p>
                    <div className="links">
                        <a
                            href="https://www.softwaresensei.ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sensei.AI Website
                        </a>
                    </div>
                </div>
                <img src="sensei-logo.svg" />
            </div>
            <Carousel images={images} />
        </div>
    );
}

export default Sensei;
