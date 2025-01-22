import "../styles/Interest.css";
import Carousel from "../components/Carousel";

function Aerospace() {
    const images = [
        "senseidronelaunch.jpg",
        "senseilaunch.jpg",
        "senseirecovery.jpg",
        "senseirocket.jpg",
        "rooni.jpg",
        "sli-launch.jpg",
        "r4saward.jpg",
        "nar-cert.jpg",
        "rocket-launch.jpg",
        "rocketbuild2.jpg",
        "r4s-team.jpg",
        "buildingrocket.jpg",
        "fiberglassing.jpg",
        "workingelectronics.jpg",
        "finchamfer.jpg",
        "payload.jpg",
        "prelaunchpayload.jpg",
        "r4srocket.jpg",
        "names.jpg",
        "heracles.jpg",
        "holdingl1.jpg",
        "l1prefillet.jpg",
        "l1fillet.jpg",
    ];

    return (
        <div className="interest">
            <div className="intro">
                <div>
                    <h1>Aerospace</h1>
                    <p>
                        In my junior year, I joined the aerospace club at my
                        high school to expand my knowledge of engineering and
                        design into the field of rocketry. In this club, we
                        competed in numerous national competitions, including
                        the NASA Student Launch Initiative, Rockets For Schools,
                        and the American Rocketry Challenge. In this team, I was
                        able to apply many of the skills I had gained from
                        classes, robotics, and personal projects, from machining
                        parts of the rocket to managing the software and
                        electronics for the payloads. Our club was lucky to have
                        an amazing mentor, Andrew Brown, who was able to guide
                        us through high-quality rocket construction, and even
                        helped many of us get our certifications for high
                        powered rocketry. I was also able to apply the
                        web-development skills I gained from creating Sensei.AI
                        to create a website for this club.
                    </p>
                    <div className="links">
                        <a
                            href="https://nhsaerospace.github.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Northville Aerospace
                        </a>
                    </div>
                </div>
                <img src="sli-launch.jpg" />
            </div>
            <Carousel images={images} />
            <div className="list">
                <div className="item">
                    <div>
                        <h2>NAR HPR L1 Certification</h2>
                        <p>
                            In order to fly high-powered rockets, you must have
                            varying levels of certification depending on the
                            power of the motor. To obtain this certification, I
                            constructed a 54 mm diameter, fiberglass Alien
                            Interceptor, and branded it with my company,
                            Sensei.AI. I flew this rocket on a H180W motor, and
                            after a successful recovery, I was awarded my L1
                            certification.
                        </p>
                        <a
                            href="https://www.nar.org/high-power-rocketry-info/level-1-hpr-certification-procedures/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            NAR L1 Certification Procedures
                        </a>
                    </div>
                    <img
                        src="senseilaunch.jpg"
                        style={{ objectPosition: "0 -150px" }}
                    />
                </div>
                <div className="item">
                    <div>
                        <h2>NASA Student Launch Initiative</h2>
                        <p>
                            After placing second in Rockets For Schools in 2024,
                            we were invited to apply to compete in the NASA
                            Student Launch Initiative. This competition is a
                            year-long project where we design, construct, and
                            launch a high-powered rocket with a scientific
                            payload. Throughout the process, we document our
                            progress through various technical reports, as
                            linked below, and presentations to engineers at
                            NASA. We were one of less than twenty high school
                            teams invited to compete throughout the country.
                        </p>
                        <div className="links">
                            <a
                                href="https://nhsaerospace.github.io/#nasasli"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Project Documentation
                            </a>
                            <a
                                href="https://www.nasa.gov/learning-resources/nasa-student-launch/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                NASA Student Launch Initiative
                            </a>
                        </div>
                    </div>
                    <img src="rooni.jpg" />
                </div>
                <div className="item">
                    <div>
                        <h2>Rockets For Schools</h2>
                        <p>
                            Rockets For Schools is a national competition where
                            competitors in our class construct and launch an L2
                            high powered rocket. Competitors must also design
                            and construct a scientific payload that will be
                            launched and recovered with the rocked. In 2024, our
                            payload measured the tensile of strength of two
                            different metals using the rocket's acceleration.
                            Along with assisting with the construction of the
                            rocket, I was responsible for the software and
                            electronics of the payload. The electronics bay
                            consisted of an Arduino Nano, an accelerometer, an
                            altimeter, a battery, and wires that would measure
                            the electrical continuity of the metal being tested.
                            This allowed us to determine at what acceleration
                            the metal broke, and therefore backcalculate the
                            tensile strength of the metal. We placed second in
                            this competition, and where therefore invited to
                            apply to the NASA Student Launch Initiative.
                        </p>
                        <a
                            href="https://www.rockets4schools.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Rockets For Schools
                        </a>
                    </div>
                    <img src="rocket-launch.jpg" />
                </div>
                <div className="item">
                    <div>
                        <h2>American Rocketry Challenge</h2>
                        <p>
                            The American Rocketry Challenge is the largest
                            student rocketry competition in the United States.
                            Competitors are tasked with designing, constructing,
                            and launching a rocket that can reach a specific
                            altitude and safely return a raw egg. This
                            competition was a great way to get introduced to the
                            world of rocketry and aerospace, and was a great way
                            to learn the basics of rocket design and
                            construction.
                        </p>
                        <a
                            href="https://rocketcontest.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            American Rocketry Challenge
                        </a>
                    </div>
                    <img src="arc.jpg" />
                </div>
            </div>
        </div>
    );
}

export default Aerospace;
