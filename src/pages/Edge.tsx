import "../styles/Interest.css";
import Carousel from "../components/Carousel";

function Edge() {
    const images = [
        "EDGE Team with Pak.jpg",
        "EDGE Poster.jpg",
        "signontree.jpg",
        "edgeboard.jpg",
        "EDGE Team.png",
        "edgehoodie.jpg",
        "miciuik.jpg",
    ];

    return (
        <div className="interest">
            <div className="intro">
                <div>
                    <h1>EDGE</h1>
                    <p>
                        I founded EDGE (Engineering and Design for Growth and
                        Empowerment) in 2023 as a club at the Northville High
                        School to provide students with a unique opportunity to
                        gain invaluable STEM experience while actively
                        addressing real-world challenges in our community.
                        Through hands-on projects and community-focused
                        initiatives, our members acquire practical
                        problem-solving skills and deepen their understanding of
                        STEM. Unlike other clubs, EDGE is singular in its
                        dedication to harnessing the power of STEM for tangible
                        social impact.
                    </p>
                    <p>
                        Our mission is to empower students with the skills,
                        knowledge, and mindset required to tackle real-world
                        challenges through STEM-focused projects, hands-on
                        experiences, and collaborative problem-solving. Our
                        vision is to nurture the next generation of STEM leaders
                        and innovators who leverage their expertise to create
                        positive change in their communities and beyond. Our
                        core values form the foundation of our club's culture
                        and ethos. We prioritize innovation, collaboration, and
                        ingenuity. We celebrate creativity, promote teamwork,
                        and embrace a multitude of perspectives. Our driving
                        force is the belief that STEM can create a positive
                        impact, and we are committed to continuous learning,
                        personal growth, and making a meaningful difference in
                        our community.
                    </p>
                    <div className="links">
                        <a
                            href="https://northvilleedge.wixsite.com/northvilleedge"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            EDGE Website
                        </a>
                        <a
                            href="https://www.instagram.com/northvilleedge/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            EDGE Instagram
                        </a>
                    </div>
                </div>
                <img src="EDGE LOGO Final 2023.png" />
            </div>
            <Carousel images={images} />
            <div className="list">
                <div className="item">
                    <div>
                        <h2>Mustang Scholar</h2>
                        <p>
                            The Mustang Scholar is a website that we are
                            currently developing to provide an all-in-one
                            platform for students to learn about all of the
                            courses and clubs at our highschool. Currently,
                            information about our school's courses can be found
                            in a 100 page document, and our clubs can be found
                            in a 150 row spreadsheet. We are working to make
                            this information more accessible to students by
                            creating a website that will allow students to
                            search for courses and clubs based on their
                            interests. We are also incorporating LLM based
                            recommendations via a chatbot with dynamic access to
                            course and club information, as well as a dedicated
                            "recommendations" page. The website will also
                            include a feature that will allow students to create
                            a schedule for the upcoming school year. This
                            project is still in development, but we are excited
                            to see the impact it will have on our school
                            community.
                        </p>
                        <div className="links">
                            <a
                                href="https://mustangscholar.onrender.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Mustang Scholar Website
                            </a>
                            <a
                                href="https://github.com/NorthvilleEDGE/Mustang-Scholar"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub Repository
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div>
                        <h2>Interactive Trail Signage</h2>
                        <p>
                            The trail signage project was one of the first
                            projects undertaken by our club. We learned that
                            many of the new cross-country runners at our school
                            would get lost on their home trail, Cass Benton
                            Park, due to insufficient signage throughout the
                            park. So, we dedicated one of our projects to
                            solving this issue. However, rather than simply put
                            up signs throughout the park, we wanted to innovate
                            upon this trail navigation system and integrate
                            technology into our solution. Along with designing,
                            constructing, and laser engraving maps that could be
                            located throughout the park, our team set out to
                            create an app that would map the user's current
                            location onto a digital copy of our maps via a QR
                            code located on the signs. This interactivity leads
                            to a greater connection between the user and the
                            signs, allowing for more effective navigation and a
                            more enjoyable experience. By the end of the
                            project, we had hung 20 signs throughout the park.
                        </p>
                        <div className="links">
                            <a
                                href="https://northvilleedge.github.io/EDGE-Cartographer/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                EDGE Cartographer Website
                            </a>
                            <a
                                href="https://github.com/NorthvilleEDGE/EDGE-Cartographer"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub Repository
                            </a>
                        </div>
                    </div>
                    <img src="signontree.jpg" />
                </div>
            </div>
            <div className="item">
                <div>
                    <h2>Special-Ed Sensory Board</h2>
                    <p>
                        The sensory board was a concept that our club developed
                        after much discussion and collaboration with the
                        Special-Ed teachers of the school. Initially, we wanted
                        to utilize the resources we had access to in the school,
                        such as 3D printers, laser engravers, and other shop
                        tools, in order to create custom games for the
                        Special-Ed students. After discussing our ideas with the
                        teachers at, we learned that there was an entire closet
                        that they wanted to make into a "sensory room" with
                        different activities and fidgets for the kids to use. We
                        were shown an example of what a sensory object would
                        look like, which was essentially a cube with a different
                        random object attached to each face, such as a doorknob
                        or a light switch. At this point, the dream of the
                        "sensory room" had not yet been brought into reality,
                        and our club decided to change that. By the end of our
                        project, we had built a 4x8 foot board with different
                        sensory objects and activities.
                    </p>
                </div>
                <img src="edgeboard.jpg" />
            </div>
            <div className="item">
                <div>
                    <h2>Cell Phone Sanitation</h2>
                    <p>
                        Most cell phones carry ten times more bacteria than a
                        toilet seat. This simple fact came to us as a shock when
                        we were researching ways to improve public sanitation
                        throughout the community. We figured that rarely anybody
                        actually sanitizes their cell phones, despite being the
                        object that is most frequently used. Our club decided to
                        work towards solving this issue by developing a simple
                        device that could be located throughout the community to
                        sanitize cell phones. After much discussion on the most
                        efficient ways to kill bacteria, we determined that
                        sanitizing cell phones with ultraviolet light would do
                        the job with little-to-no maintenance while minimizing
                        our environmental footprint. Our final concept was a
                        simple box with slots for phones to slide into, with UV
                        LED light strips going across the lid that would turn on
                        when the box closes, eliminating any bacteria on the
                        phones. After prototyping and testing our concept, we
                        learned that it was indeed effective at killing
                        bacteria.
                    </p>
                </div>
                <img src="sanitationbox.jpg" />
            </div>
        </div>
    );
}

export default Edge;
